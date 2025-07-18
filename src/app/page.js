import NavbarDemo from "@/components/Header";
import { LandingPage } from "@/components/Landing";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NavbarDemo/>
      <LandingPage/>
    </div>
  );
}
