"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useEffect } from "react";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/product",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  useEffect(()=>{
    const getuserid = async () => {
      
      const response = await axios.get("/api/user/me")
    }
    getuserid()
  },[])
  const id = response?.data?.userId 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-1 w-full z-100 ">
      <Navbar>


        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {id && <Link href="/login"><NavbarButton variant="secondary">Login</NavbarButton></Link>}

            <Link href={`/userDashboard/${id}`}><NavbarButton variant="primary">Dashboard</NavbarButton></Link>
          </div>
        </NavBody>



        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">


              <Link href="/">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Login
                </NavbarButton>
              </Link>
              <Link href="{`/userDashboard/${id}`}">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Dashboard
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>


    </div>
  );
}


