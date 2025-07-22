"use client";
import React, { useState } from "react";
import axios from "axios";

const categories = [
  "PC & LAPTOPS",
  "COOLERS",
  "CYCLES",
  "MOBILES",
  "STUDY MATERIAL",
  "SPORTS",
  "OTHERS",
];

export default function ItemForm() {
  const [formData, setFormData] = useState({
    image: undefined,
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] }); //storing the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", formData.image); //  File object

    try {
      const response = await axios.post("/api/multer/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Optional — browser sets it automatically
        },
      });

      setFormData({ ...formData, image: response.data.cloudinary_uri });

      try {
        const res = await axios.post(
          "/api/products",
          {
            name: formData.name,
            description: formData.description,
            category: formData.category.toUpperCase(),
            price: formData.price,
            imageurl: response.data.cloudinary_uri,
          },
          {
            headers: {
              Type: "multipart/form-data",
            },
          }
        );

        if (res.data.success) {
          alert("Product added!");
        } else {
          alert("Failed to add item");
        }
      } catch (error) {
        console.error("Error uploading product:", error);
        alert("Upload failed");
      }
    } catch (error) {
      console.log("Failed in uploading Image : ", error);
    }
    // Reset form
    setFormData({
      image: null,
      name: "",
      description: "",
      category: "",
      price: "",
    });

    
    document.getElementById("imageUpload").value = null;
  };

  return (
    <div className="min-Contenth-screen flex items-center justify-center bg-[#f7edda] h-screen w-screen mx-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#e05548] p-8 rounded-3xl shadow-xl ring-1 ring-zinc-800 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          List an Item
        </h2>

        {/* Upload the image of product */}
        <label className="text-white text-sm block mb-1">Item Image</label>
        <input
          type="file"
          name="image"
          id="imageUpload"
          onChange={handleChange}
          className="w-full bg-[#fff8e6] text-black text-sm placeholder:text-black file:bg-[#e05548] file:border-none file:rounded file:px-4 file:py-2 file:text-white file:cursor-pointer rounded px-2 py-2 mb-4"
        />

        {/* Name of product */}
        <label className="text-white text-sm block mb-1">Item Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter item name"
          required
          className="w-full bg-[#fff8e6] text-black rounded placeholder:text-black px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e05548] transition"
        />

        {/* Description of product */}
        <label className="text-white text-sm block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description"
          required
          className="w-full bg-[#fff8e6] text-black placeholder:text-black rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e05548] transition"
          rows="3"
        />

        {/* Category of product */}
        <label className="text-white text-sm block mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-[#fff8e6] text-black rounded placeholder:text-black px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#e05548] transition"
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price of product */}
        <label className="text-white text-sm block mb-1">Price (₹)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="1"
          placeholder="Enter price"
          required
          className="w-full bg-[#fff8e6] text-black placeholder:text-black rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#e05548] transition"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#fff8e6] text-black font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
}
