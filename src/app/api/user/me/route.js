import { getUserId } from "@/helper/getUserId";
import { NextResponse } from "next/server";
import User from "@/Models/user";
import dbconnect from "@/DB/dbconfig";

dbconnect();

export async function GET(req) {
  try {

    const userId = await getUserId();

    const user = await User.findById(userId);

    if(!user){
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


    if(!userId){
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    return NextResponse.json({ userId: userId, user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
    } }, { status: 200 });
  } catch (error) {
    console.log("Failed in fetching user Id", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
