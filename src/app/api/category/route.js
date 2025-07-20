import { NextResponse } from "next/server";
import dbconnect from "@/DB/dbconfig";
import Category from "@/Models/category";
import Products from "@/Models/product";
import mongoose from "mongoose";

dbconnect();

export async function GET(req) {
  try {
    let categoryName = await req.nextUrl?.searchParams?.get("name");
    let pipeline = [];

    if (!categoryName) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    } 

    categoryName = categoryName.toUpperCase();

    console.log(categoryName);
    if (
      [
        "PC & LAPTOPS",
        "COOLERS",
        "CYCLES",
        "MOBILES",
        "STUDY MATERIAL",
        "SPORTS",
        "OTHERS",
      ].includes(categoryName)
    ) {
      var category = await Category.findOne({
        name: categoryName.toUpperCase().trim(),
      });

      if (!category) {
        return NextResponse.json(
          { message: "No Product Found in this category" },
          { status: 201 }
        );
      } else {
        pipeline.push({
          $match: {
            categories: new mongoose.Types.ObjectId(category._id),
          },
        });
      }
    } else if (categoryName !== "ALL") {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    pipeline.push({
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
    });

    pipeline.push({
      $lookup: {
        from: "categories",
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
    });

    pipeline.push({
      $project: {
        name: 1,
        description: 1,
        price: 1,
        image: 1,
        ownerDetails: { $arrayElemAt: ["$ownerDetails", 0] },
        categoryDetails: { $arrayElemAt: ["$categoryDetails", 0] },
      },
    });

    const products = await Products.aggregate(pipeline);

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
