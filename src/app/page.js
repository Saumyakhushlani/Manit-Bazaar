import NavbarDemo from "@/components/Header";
import ItemForm from "@/components/ItemForm";
import { LandingPage } from "@/components/Landing";
import Footer from "@/components/ui/footer";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <NavbarDemo />
        <LandingPage />
        <Footer />
      </div>
      {/* <div className="min-h-screen bg-zinc-950 text-white py-10 px-4">
        <ItemForm/>
      </div> */}
    </>
  );
}
