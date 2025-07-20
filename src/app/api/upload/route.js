import { NextResponse } from "next/server";
import dbconnect from "@/DB/dbconfig";
import Product from "@/Models/product";

await dbconnect();

export async function POST(req) {
  try {
    const data = await req.json();

    const { name, description, category, price, imageUrl } = data;

    // Validations
    if (!name || !description || !category || !price || !imageUrl) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    if (price <= 0) {
      return NextResponse.json(
        { success: false, message: "Price must be greater than 0" },
        { status: 400 }
      );
    }


    const newProduct = await Product.create({
      name,
      description,
      category,
      price,
      imageUrl,
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (err) {
    console.error("Upload Error:", err);


    return NextResponse.json(
      { success: false, message: "Server error while uploading item" },
      { status: 500 }
    );
  }
}