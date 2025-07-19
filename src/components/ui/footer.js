import Link from "next/link";
import React from "react";
import Aurora from "../Aurora";

const Footer = () => {
  return (
    <footer className="flex flex-col  items-center justify-center mt-15 nutral-950 w-full">
      <div className="p-1 bg-clip-text text-transparent ">
        <span className="font-bold md:text-6xl text-3xl text-center text-white">
          <span className="text-purple-500">MANIT</span> BAZAAR
        </span>
      </div>
      <div className=" mb-2">
        <ul className="flex flex-row gap-8 justify-center text-lg font-semibold">
          <li>
            <Link
              href="/"
              className="text-purple-400 hover:text-white cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="text-purple-400 hover:text-white cursor-pointer"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-purple-400 hover:text-white cursor-pointer"
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center text-md bg-clip-text text-transparent text-white ">
          &copy; {new Date().getFullYear()} MANIT BAZAAR. All rights reserved.
        </p>
      </div>
      <Aurora
        colorStops={["#c084fc", "#fff", "#c084fc"]}
        blend={0.5}
        amplitude={0.7}
        speed={0.5}
      />
    </footer>
  );
};

export default Footer;
