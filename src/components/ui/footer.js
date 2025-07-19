import Link from "next/link";
import React from "react";
import Aurora from "../Aurora";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 items-center justify-center p-4 nutral-950 w-full">
      <div className="p-1 bg-clip-text text-transparent ">
        <span className="font-bold lg:text-5xl text-3xl text-center text-white">
          MANIT BAZAAR
        </span>
      </div>
      <div className="sm:mt-5 mt-2">
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
