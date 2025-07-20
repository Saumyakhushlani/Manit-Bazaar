import { NextResponse } from "next/server";
import dbconnect from "@/DB/dbconfig";
import Category from "@/Models/category";
import Products from "@/Models/product";
import mongoose from "mongoose";

dbconnect();

export async function GET(req) {
  try {
    const categoryName = req.nextUrl.searchParams.get("name");

    if (!categoryName) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }
    const category = await Category.findOne({ name: categoryName });
    
    
    if (!category) {
        if(categoryName.toUpperCase() in ["PC & LAPTOPS", "COOLER", "ALL ITEMS", "CYCLES", "MOBILES", "STUDY MATERIAL", "SPORTS", "OTHERS"]){
            return NextResponse.json({message: "No Product Found in this category"}, {status: 201})
        }
        return NextResponse.json(
            { error: "Category not found" },
            { status: 404 }
        );
    }
    
    
    const products = await Products.aggregate([
      {
        $match: {
          categories: new mongoose.Types.ObjectId(category._id),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          pipeline: [
            {
              $project: {
                name: 1,
                email: 1,
                profilePhoto: 1,
                phone: 1,
              },
            },
          ],
          as: "ownerDetails",
        },
      },{
        $lookup: {
          from: "category",
          localField: "categories",
          foreignField: "_id",
          pipeline: [
            {
              $project: {
                name: 1,
              },
            },
          ],
          as: "categoryDetails",
        },
      },
      {
        $project: {
          name: 1,
          description: 1,
          price: 1,
          image: 1,
          ownerDetails: { $arrayElemAt: ["$ownerDetails", 0] },
          categoryDetails: { $arrayElemAt: ["$categoryDetails", 0] },
        },
      }
    ]);

    return NextResponse.json(
      {
        success: true,
        products: products,
      },
      { status: 200 }
    );

  } catch (error) {
    console.log("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories", message: error },
      { status: 500 }
    );
  }
}
