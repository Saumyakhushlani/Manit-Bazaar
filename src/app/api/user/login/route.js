/**
 * @file User login API route handler
 * @description Authenticates users against the MANIT ERP system and manages local user records
 *
 * @route POST /api/user/login
 *
 * @param {Object} req - The Next.js request object
 * @param {Object} req.body - The request body
 * @param {string} req.body.username - User's MANIT username (without @manit.ac.in)
 * @param {string} req.body.password - User's MANIT ERP password
 *
 * @returns {Object} 200 - Success response
 * @returns {string} 200.message - Success message
 * @returns {Object} 200.user - User information
 * @returns {string} 200.user.name - User's full name
 * @returns {string} 200.user.email - User's email address
 * @returns {string} 200.user.profilePhoto - URL to user's profile photo
 *
 * @returns {Object} 401 - Authentication error
 * @returns {string} 401.message - Error message describing the authentication failure
 *
 * @returns {Object} 500 - Server error
 * @returns {string} 500.message - Error message
 *
 * @throws Will throw an error if database connection fails or MANIT ERP authentication fails
 */

import { NextResponse } from "next/server";
import dbconnect from "@/DB/dbconfig";
import axios from "axios";
import User from "@/Models/user";
import { cookies } from "next/headers";
import https from "https";

dbconnect();

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const cookieStore = await cookies();

    if (!username || !password) {
      return NextResponse.json(
        { message: "username and password required" },
        { status: 401 }
      );
    }

    try {
      const agent = new https.Agent({
        rejectUnauthorized: false, // Disable SSL verification
      });

      const response = await axios.post(
        `https://erpapi.manit.ac.in/api/login`,
        { username, password },
        {
          httpsAgent: agent, // Use the custom agent to ignore SSL errors
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const user = await User.findOne({ email: `${username}@manit.ac.in` });

      if (!user) {
        const newUser = await User.create({
          name: response.data?.userInfo?.gecos.split(",,")[0],
          phone: response.data?.userInfo?.gecos.split(",,")[1],
          email: `${username}@manit.ac.in`,
          profilePhoto: response.data?.userInfo?.photo,
        });

        await newUser.save();
        var refreshToken = await newUser.generateRefreshToken();
        newUser.refreshToken = refreshToken;
      } else {
        var refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save();
      }

      cookieStore.set("token", refreshToken);

      return NextResponse.json({
        message: "Login Successful",
        user: {
          name: response.data?.userInfo?.gecos.split(",,")[0],
          email: `${username}@manit.ac.in`,
          profilePhoto: response.data?.userInfo?.photo,
        },
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Failed in ERP Authentication" },
        { status: 403 }
      );
    }
  } catch (error) {
    console.log("Failed in Login : ", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
