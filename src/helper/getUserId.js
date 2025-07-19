import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export async function getUserId(){
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token");

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