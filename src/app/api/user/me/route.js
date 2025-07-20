import { getUserId } from "@/helper/getUserId";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {

    const userId = await getUserId();

    if(!userId){
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    return NextResponse.json({ userId: userId }, { status: 200 });
  } catch (error) {
    console.log("Failed in fetching user Id", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
