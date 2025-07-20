"use client";
import React, { useEffect, useState } from "react";
import NavbarDemo from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/ui/footer";
import axios from "axios";
import { useParams } from "next/navigation";

const CategoryPage = async ({ params }) => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  category = category.replace("-", " ");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/category?name=${category}`);

        setProducts([...products, ...(response.data.products || [])]);
      } catch (error) {
        console.log("Failed in fetching products : ", error);
      }
    };

    fetchProducts();
  }, []);

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

      <Footer />
    </>
  );
};

export default CategoryPage;
