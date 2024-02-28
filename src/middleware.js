import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  // if (request.nextUrl.pathname == "/login") {
  //   return NextResponse.next();
  // } else if (request.nextUrl.pathname.includes("/_next")) {
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  const path = request.nextUrl.pathname;
  if (path.includes("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (path.includes("/user")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
  }
  return NextResponse.next();
}

// for redirecting form specific page
export const config = {
  matcher: [
    // "/:path*",

    "/user/:path*",
    "/admin/:path*",
  ],
};
