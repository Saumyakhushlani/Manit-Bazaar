"use client";
import React, { useState } from "react";
import NavbarDemo from "@/components/Header";
import { MdOutlineErrorOutline } from "react-icons/md";
import Footer from "@/components/ui/footer";
import ItemForm from "@/components/ItemForm";
import { motion } from "motion/react";
import { Cross } from "lucide-react";

const page = () => {
  const data = [
    {
      id: "p001",
      name: "Wireless Headphones",
      description:
        "High-quality over-ear wireless headphones with noise cancellation.",
      price: 129.99,
      category: ["64c9a2b1f1e3ab45d7e12345"],
      image: "https://picsum.photos/id/237/200/300",
      createdAt: "2025-07-01T10:15:00Z",
      owner: "64c9a2b1f1e3ab45d7e67890",
      updatesAt: "2025-07-10T12:00:00Z",
    },
    {
      id: "p001",
      name: "Wireless Headphones",
      description:
        "High-quality over-ear wireless headphones with noise cancellation.",
      price: 129.99,
      category: ["64c9a2b1f1e3ab45d7e12345"],
      image: "https://picsum.photos/id/237/200/300",
      createdAt: "2025-07-01T10:15:00Z",
      owner: "64c9a2b1f1e3ab45d7e67890",
      updatesAt: "2025-07-10T12:00:00Z",
    },
    {
      id: "p001",
      name: "Wireless Headphones",
      description:
        "High-quality over-ear wireless headphones with noise cancellation.",
      price: 129.99,
      category: ["64c9a2b1f1e3ab45d7e12345"],
      image: "https://picsum.photos/id/237/200/300",
      createdAt: "2025-07-01T10:15:00Z",
      owner: "64c9a2b1f1e3ab45d7e67890",
      updatesAt: "2025-07-10T12:00:00Z",
    },
  ];

  const User = {
    name: "Saumya",
    email: "saumyakhushlani9@gmail.com",
    img: "/saumya.jpg",
    phone: "+91 9929335307",
  };
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <NavbarDemo />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: isClicked ? 0 : "-100vw" }}
        transition={{ duration: 0.3 }}
        className="fixed top-5 flex items-start justify-center w-screen h-screen mx-auto bg-neutral-950 z-1000 rounded-3xl "
      >
        <ItemForm />
        <Cross
          onClick={() => setIsClicked(!isClicked)}
          className="rotate-45 absolute right-[20px] top-[20px]"
        />
      </motion.div>
      <div
        className={`${
          isClicked ? "hidden" : "block"
        }bg-neutral-950 flex flex-col justify-center items-center py-15 md:px-10 px-5 relative z-1`}
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 bg-neutral-900 my-5 rounded-xl md:p-6 py-6 px-3">
          <img
            src={User.img}
            alt={User.name}
            className="w-40 h-40 rounded-full border-2 border-purple-500 flex-1"
          />
          <div className="flex-3">
            <div className="text-3xl text-purple-500 font-semibold mb-2">
              Name: {User.name}
            </div>
            <div className="text-xl text-white">Email: {User.email}</div>
            <div className="text-xl text-white">Phone :{User.phone}</div>
          </div>
        </div>
        <div className="text-4xl text-purple-500 font-semibold mt-4 mb-2">
          My Products
        </div>
        <button
          className={`bg-purple-500 px-4 py-2 rounded-lg mb-10`}
          onClick={() => setIsClicked(!isClicked)}
        >
          Add New Item
        </button>
        {data.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-evenly items-center  gap-10">
            {data.map((e) => (
              <div key={e.id} className="rounded-lg w-75 bg-neutral-900 pb-3">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full h-60 object-cover"
                />
                <div className="text-purple-500 text-2xl mt-1.5 font-semibold px-2">
                  {e.name}
                </div>
                <div className="text-white text-md my-1 px-2">
                  {e.description}
                </div>
                <div className="text-white font-semibold px-2">₹{e.price}</div>
                <button className=" mx-2 bg-red-600 text-white w-30 mt-2 rounded-lg py-1">
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-20">
            <MdOutlineErrorOutline size={150} className="text-purple-500 " />
            <div className="text-2xl mt-3 text-white ">
              It looks like you haven’t listed anything yet.
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default page;
