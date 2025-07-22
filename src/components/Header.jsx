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
import { useRouter } from "next/navigation";

export default function NavbarDemo() {
  const [id, setid] = useState()
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

  useEffect(() => {
    const getuserid = async () => {
      try {

        const response = await axios.get("/api/user/me")
        console.log(response)
      setid(response?.data.userId)
      } catch (error) {
        console.log("Not Logged In",error)
      }
      
    }
    getuserid()
  }, [])

  const router =useRouter()
  const logoutuser = async()=>{
    try {
      await axios.get('/api/user/logout')
      router.push('/')
    } catch (error) {
      console.log("Error in Logout",error)
    }
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-1 w-full z-100 ">
      <Navbar>


        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {!id && <a href="/login"><NavbarButton variant="secondary">Login</NavbarButton></a>}
            {id&& <button onClick={logoutuser}><NavbarButton variant="secondary">Logout</NavbarButton></button>}
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


              {!id&&<Link href="/login">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Login
                </NavbarButton>
              </Link>}
              {id&&
                <NavbarButton
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    logoutuser()
                  }}
                  variant="primary"
                  className="w-full">
                  Logout
                </NavbarButton>
              }
              <Link href={`/userDashboard/${id}`}>
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


