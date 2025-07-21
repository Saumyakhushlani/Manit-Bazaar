import Link from "next/link";
import React from "react";
import Aurora from "../Aurora";

const Footer = () => {
  return (
    <footer className="flex flex-col  items-center justify-center mt-15 nutral-950 w-full">
      <div className="p-1 bg-clip-text text-transparent ">
        <span className="font-bold md:text-6xl text-3xl text-center text-[#E05548]">
          <span className="text-[#472307]">MANIT</span> BAZAAR
        </span>
      </div>
      <div className=" mb-2">
        <ul className="flex flex-row gap-8 justify-center text-lg font-semibold">
          <li>
            <Link
              href="/"
              className="text-[#d62b1c] hover:text-black cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="text-[#d62b1c] hover:text-black cursor-pointer"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[#d62b1c] hover:text-black cursor-pointer"
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center text-md bg-clip-text text-[#351E11] ">
          &copy; {new Date().getFullYear()} MANIT BAZAAR. All rights reserved.
        </p>
      </div>
      <Aurora
        colorStops={["#E05548", "#FFF8E6", "#FF2800"]}
        blend={0.5}
        amplitude={0.7}
        speed={0.5}
      />
    </footer>
  );
};

export default Footer;
