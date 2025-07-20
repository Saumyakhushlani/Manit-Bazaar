import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export async function getUserId(){
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "No token found" });
        }

        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        return decoded.id;
    } catch (error) {
        console.log("Error in getUserId:", error);
        return NextResponse.json({ success: false, message: error.message });
    }
}