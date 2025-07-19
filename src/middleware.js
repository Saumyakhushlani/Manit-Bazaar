import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req) {
//   const response = NextResponse.next();
//   const token = (await cookies()).get("token")?.value;
//   const path = req.nextUrl.pathname;

//   if (token && path === "/login") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (!token && path !== "/login") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

}
