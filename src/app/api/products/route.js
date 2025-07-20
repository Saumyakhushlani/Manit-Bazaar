/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Retrieves products with related user and category details
 *     description: Fetches products with optional filtering by user ID. Includes user and category information through MongoDB aggregation.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Optional user ID to filter products by creator
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       price:
 *                         type: number
 *                       category:
 *                         type: string
 *                       userId:
 *                         type: string
 *                       images:
 *                         type: array
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       userDetails:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           email:
 *                             type: string
 *                           profilePhoto:
 *                             type: string
 *                           phone:
 *                             type: string
 *                       categoryDetails:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * API endpoint to fetch products with optional filtering by user ID
 *
 * @route POST /api/products
 *
 * @param {Object} req - The HTTP request object from Next.js
 * @param {URL} req.nextURL - The parsed URL object containing query parameters
 * @param {Object} req.nextURL.searchParams - Query parameters from the request URL
 * @param {string} [req.nextURL.searchParams.id] - Optional user ID to filter products by
 *
 * @returns {Object} Response object
 * @returns {boolean} Response.success - Indicates if the request was successful
 * @returns {Array<Object>} Response.products - Array of product objects with the following structure:
 * @returns {string} Response.products[].title - Product title
 * @returns {string} Response.products[].description - Product description
 * @returns {number} Response.products[].price - Product price
 * @returns {string} Response.products[].category - Category ID
 * @returns {string} Response.products[].userId - User ID of the seller
 * @returns {Array<string>} Response.products[].images - Array of image URLs
 * @returns {Date} Response.products[].createdAt - Creation timestamp
 * @returns {Date} Response.products[].updatedAt - Last update timestamp
 * @returns {Object} Response.products[].userDetails - Seller information
 * @returns {string} Response.products[].userDetails.name - Seller name
 * @returns {string} Response.products[].userDetails.email - Seller email
 * @returns {string} Response.products[].userDetails.profilePhoto - Seller profile photo URL
 * @returns {string} Response.products[].userDetails.phone - Seller phone number
 * @returns {Object} Response.products[].categoryDetails - Category information
 * @returns {string} Response.products[].categoryDetails.name - Category name
 *
 * @throws {Object} Error response with status 500 if server encounters an error
 */

import { NextResponse } from "next/server";
import dbconnect from "@/DB/dbconfig";
import Products from "@/Models/product";
import Category from "@/Models/category";
import { getUserId } from "@/helper/getUserId";
import mongoose from "mongoose";
import User from "@/Models/user";

dbconnect();

export async function GET(req) {
  //   console.log("Fetching products...");
  try {
    let pipeline = [];
    // fetching the userId from the request
    const id = await req.nextURL?.searchParams?.get("id");

    if (id) {
      // If id is provided, filter products by userId
      pipeline.push({
        $match: { owner: new mongoose.Types.ObjectId(id) },
      });
    }

    // If no id is provided, fetch all products
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

    console.log(products);

    return NextResponse.json(
      {
        success: true,
        products: products,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Failed in fetching products: ", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const productId = await req.nextUrl.searchParams.get("id");

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const deletedProduct = await Products.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Failed in deleting product: ", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, description, category, price, imageurl } = await req.json();
    const userId = await getUserId();
    var categoryId = undefined;

    // Validations
    if (!name || !description || !category || !price || !imageurl) {
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

    // console.log("Received data:", data);
    var categoryDoc = await Category.findOne({
      name: category.toUpperCase().trim(),
    });

    if (!categoryDoc) {
      var newCategory = await Category.create({
        name: category.toUpperCase().trim(),
      });
      categoryId = newCategory._id;
      categoryDoc = newCategory;
    } else {
      categoryId = categoryDoc._id;
    }

    var newProduct = await Products.create({
      name,
      description,
      categories: new mongoose.Types.ObjectId(categoryId),
      price,
      image: imageurl,
      owner: new mongoose.Types.ObjectId(userId), // Assuming userId is passed in data
    });

    categoryDoc.products.push(newProduct._id);
    await categoryDoc.save();

    const user = await User.findById(userId);
    user.products.push(newProduct._id);
    await user.save();

    console.log("New product created:", newProduct);

    return NextResponse.json({ success: true, product: newProduct });
  } catch (err) {
    console.log("Upload Error:", err);

    return NextResponse.json(
      { success: false, message: "Server error while uploading item" },
      { status: 500 }
    );
  }
}
