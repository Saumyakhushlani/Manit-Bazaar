import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req) {
  const token = (await cookies()).get("token")?.value;
  const path = req.nextUrl.pathname;

  if (!token && path.startsWith("/userDashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  else if (!token && path.startsWith("/product")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  else if (!token && path.startsWith("/items/*")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && path.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
