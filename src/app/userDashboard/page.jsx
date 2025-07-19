import React from "react";
// import axios from "axios";
import UserProducts from "@/components/UserProducts";
// import { getUserId } from "@/helper/getUserId";

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
    },{
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
  //   const userId = getUserId();
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get("/api/:userId/product");
  //       return response;
  //     } catch (error) {}
  //   };

  return (
    <div>
      <nav className="flex flex-row justify-between p-5 sm:p-10">
        <span className="text-2xl font-semibold">Dashboard</span>
        <button className="bg-purple-500 px-5 py-1 rounded-full cursor-pointer hover:opacity-80">
          Add Product
        </button>
      </nav>
      {/* your Products */}
      <div className="border p-4 mx-3 rounded-md">
        <div className="flex ">
          <h1 className="sm:px-10 px-5 font-semibold text-lg">Your Products</h1>
        </div>
        <div className="text-white">
          {data.map((d, index) => (
            <UserProducts
              key={index}
              name={d.name}
              price={d.price}
              image={d.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
