"use client"
import React, { useEffect, useState } from "react";
import NavbarDemo from "@/components/Header";
import { MdOutlineErrorOutline } from "react-icons/md";
import Footer from "@/components/ui/footer";
import { useParams } from "next/navigation";
import axios from "axios";


const page = ({ props }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({ name: "", email: "", phone: undefined })


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products?id=${id}`);


        setData([...data, ...(response.data.products || [])]);

      } catch (error) {
        console.log("Failed in fetching user products and details : ", error);
      }

    };

    const userdetails = async () => {
      try {
        const me = await axios.get('/api/user/me')
        console.log(me)
        setUserData({ name: me?.data.user.name, email: me?.data.user.email, phone: me?.data.user.phone })
      } catch (error) {
        console.log("Error in fetching user details : ", error)
      }
    }
    const deleteProduct = async (e) => {
      await axios.delete(`/api/product?id=${[e._id]}`)
    }
    userdetails()
    fetchProduct();
    console.log(userData)
  }, []);



  return (
    <>
      <NavbarDemo />
      <div className="bg-neutral-950 flex flex-col justify-center items-center py-15 md:px-10 px-5">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 bg-neutral-900 my-5 rounded-xl md:p-6 py-6 px-3">
          <img
            src="https://avatar.iran.liara.run/public"
            alt={userData.name}
            className="w-40 h-40 rounded-full border-2 border-purple-500 flex-1"
          />
          <div className="flex-3">
            <div className="text-3xl text-purple-500 font-semibold mb-2">
              Name: {userData.name}
            </div>
            <div className="text-xl text-white">Email: {userData.email}</div>
            <div className="text-xl text-white">Phone :{userData.phone}</div>
          </div>
        </div>
        <div className="text-4xl text-purple-500 font-semibold mt-4 mb-2">
          My Products
        </div>
        <button className="bg-purple-500 px-4 py-2 rounded-lg mb-10">
          Add New Item
        </button>

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
              <button 
              onClick={deleteProduct}
              className=" mx-2 bg-red-600 text-white w-30 mt-2 rounded-lg py-1">
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
