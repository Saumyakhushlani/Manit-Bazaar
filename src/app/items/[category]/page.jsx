import React from "react";
import NavbarDemo from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import dbconnect from "@/DB/dbconfig";
import Products from "@/Models/product";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/footer";

const CategoryPage = async ({ params }) => {
  const { category } = params;
  await dbconnect();

  let products = [];

  try {
    if (category === "all") {
      products = await products.find({}).lean();
    } else {
      const categoryKey = category.toUpperCase();
      products = await Products.find({ categories: categoryKey }).lean();
    }

    if (!products.length) return notFound();
  } catch (err) {
    console.error("Error fetching products:", err);
    return notFound();
  }

  return (
    <>
      <NavbarDemo />
      <div className="bg-neutral-950 flex flex-col justify-center items-center py-22 px-10">
        <div className="text-purple-500 text-5xl font-semibold mb-5">
          Discover Amazing Items
        </div>
        <div className="text-white text-xl">
          Find pre‑loved books, gadgets, hostel essentials, and more – all from
          fellow MANITians.
        </div>
        <div className="text-white text-xl mb-6">
          Browse a wide range of products and find exactly what you need.
        </div>

        <div className="flex flex-row flex-wrap md:gap-5 gap-10">
          {products.map((e) => (
            <div key={e._id} className="">
              <ProductCard data={e} />
            </div>
          ))}
        </div>
      </div>
      
      <Footer/>
    </>
  );
};


export default CategoryPage;
