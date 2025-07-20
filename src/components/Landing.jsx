import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function LandingPage() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-6xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black ">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="tracking-wider uppercase ">Manit Bazaar</span>
            </div>
          </h2>
        </div>
        <div className="relative mt-[-25px] md:mt-[-16px] flex justify-center items-center w-full max-w-md md:max-w-3xl px-4 py-4">
          <p className="text-[17px] md:text-md lg:text-lg text-neutral-300 text-center md:max-w-8xl max-w-xl px-3">
            Manit Bazaar is a student-to-student reselling platform exclusively
            for the MANIT community. Buy, sell, or exchange books, gadgets,
            furniture, and more — all within your campus. Simplify your college
            life by trading with trusted peers!
          </p>
        </div>
        <Link href="/product">
          <button
            className="mt-6 flex items-center gap-x-2 bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 
             rounded-lg text-black px-6 py-3 font-semibold text-lg 
             shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
