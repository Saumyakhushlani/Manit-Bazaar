import React from "react";

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
      </div>
    </BackgroundBeamsWithCollision>
  );
}
