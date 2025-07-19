import NavbarDemo from "@/components/Header";
import ItemForm from "@/components/ItemForm";
import { LandingPage } from "@/components/Landing";
import Rules from "@/components/Rules";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <NavbarDemo />
        <LandingPage />
        <Rules/>
        <Footer />
      </div>    
    </>
  );
}
