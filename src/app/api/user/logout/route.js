import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    // Handle logout logic here
    const cookieStore = await cookies();
    cookieStore.set("token", "");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
