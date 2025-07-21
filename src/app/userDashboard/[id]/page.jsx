"use client";
import React, { useEffect, useState } from "react";
import NavbarDemo from "@/components/Header";
import { MdOutlineErrorOutline } from "react-icons/md";
import Footer from "@/components/ui/footer";
import { useParams } from "next/navigation";
import axios from "axios";
import { motion } from "motion/react";
import ItemForm from "@/components/ItemForm";
import { Cross } from "lucide-react";

const page = ({ props }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: undefined,
  });

  const [openmodal, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products?id=${id}`);

        setData([...(response.data.products || [])]);
      } catch (error) {
        console.log("Failed in fetching user products and details : ", error);
      }
    };

    const userdetails = async () => {
      try {
        const me = await axios.get("/api/user/me");
        console.log(me);
        setUserData({
          name: me?.data.user.name,
          email: me?.data.user.email,
          phone: me?.data.user.phone,
        });
      } catch (error) {
        console.log("Error in fetching user details : ", error);
      }
    };

    userdetails();
    fetchProduct();
    console.log(userData);
  }, []);

  const deleteProduct = async (e) => {
    try {
      await axios.delete(`/api/products?id=${e._id}`);

      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/api/products?id=${id}`);

          setData([...(response.data.products || [])]);
        } catch (error) {
          console.log("Failed in fetching user products and details : ", error);
        }
      };

      fetchProduct();
    } catch (error) {
      console.log("Failed in deleting product : ", e);
    }
  };

  return (
    <>
      <NavbarDemo />
      <div className="bg-[#f7edda] flex flex-col justify-center items-center py-15 md:px-10 px-5 overflow-x-hidden">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 bg-[#fff8e6] shadow-xl my-5 rounded-xl md:p-6 py-6 px-3">
          <img
            src="https://avatar.iran.liara.run/public"
            alt={userData.name}
            className="w-40 h-40 rounded-full border-2 border-[#e05548] flex-1"
          />
          <div className="flex-3">
            <div className="text-3xl text-[#e05548] font-semibold mb-2">
              Name: {userData.name}
            </div>
            <div className="text-xl text-black">Email: {userData.email}</div>
            <div className="text-xl text-black">Phone :{userData.phone}</div>
          </div>
        </div>
        <div className="text-4xl text-[#e05548] font-semibold mt-4 mb-2">
          My Products
        </div>
        <button
          className="bg-[#472307] px-4 py-2 rounded-lg mb-10 text-[#fff8e6]"
          onClick={() => {
            setModalOpen(!openmodal);
          }}
        >
          Add New Item
        </button>

        <motion.div
          className="backdrop-blur-xl flex flex-row justify-center items-center w-full h-screen fixed overflow-x-hidden z-1000 inset-0"
          initial={{ translateX: "-100vw" }}
          animate={{ translateX: openmodal ? 0 : "-100vw" }}
          transition={{ duration: 0.4 }}
        >
          <ItemForm />
          <Cross
            onClick={() => setModalOpen(!openmodal)}
            className="rotate-45 absolute right-[20px] top-[20px] text-[#e05548]"
          />
        </motion.div>

        <div className="flex flex-row flex-wrap justify-evenly items-center  gap-10">
          {data.map((e) => (
            <div
              key={e.id}
              className="rounded-lg w-75 bg-[#fff8e6] pb-3 shadow-xl"
            >
              <img
                src={e.image}
                alt={e.name}
                className="w-full h-60 object-cover"
              />
              <div className="text-[#e05548] text-2xl mt-1.5 font-semibold px-2">
                {e.name}
              </div>
              <div className="text-black text-md my-1 px-2">
                {e.description}
              </div>
              <div className="text-black font-semibold px-2">₹{e.price}</div>
              <button
                onClick={() => {
                  deleteProduct(e);
                }}
                className=" mx-2 bg-red-600 text-white w-30 mt-2 rounded-lg py-1"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
