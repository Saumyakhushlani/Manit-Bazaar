"use client";
import React, { useState } from "react";
import axios from "axios";

const categories = ["COOLER","CYCLE","MOBILE","PC & LAPTOP","STUDY","SPORTS","OTHER"];

export default function ItemForm() {
  const [formData, setFormData] = useState({
    image: null,
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
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("image", formData.image); //  File object

    try {
      const res = await axios.post("/api/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        alert("Product added!");
      } else {
        alert("Failed to add item");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Upload failed");
    }

    // Reset form
    setFormData({
      image: null,
      name: "",
      description: "",
      category: "",
      price: "",
    });

    // Clear file input manually
    document.getElementById("imageUpload").value = null;
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-zinc-900 p-8 rounded-3xl shadow-xl ring-1 ring-zinc-800 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          List an Item
        </h2>

        {/* Upload the image of product */}
        <label className="text-white text-sm block mb-1">Item Image</label>
        <input
          type="file"
          name="image"
          id="imageUpload"
          onChange={handleChange}
          className="w-full bg-zinc-800 text-white text-sm file:bg-purple-600 file:border-none file:rounded file:px-4 file:py-2 file:text-white file:cursor-pointer rounded px-2 py-2 mb-4"
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
          className="w-full bg-zinc-800 text-white rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />

        {/* Description of product */}
        <label className="text-white text-sm block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description"
          required
          className="w-full bg-zinc-800 text-white rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          rows="3"
        />

        {/* Category of product */}
        <label className="text-white text-sm block mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full bg-zinc-800 text-white rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
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
          className="w-full bg-zinc-800 text-white rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm tracking-wide hover:scale-105 transition-transform duration-300"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
}


// {
//   /* <div className="min-h-screen bg-zinc-950 text-white py-10 px-4">
//         <ItemForm/>
//       </div> */
// }
// paste where needed