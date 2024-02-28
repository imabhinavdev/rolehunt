import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  let isCookieSet = request.cookies.get("token") || null;

  let role = "";

  if (isCookieSet) {
    const cookieValue = isCookieSet.value;
    const tokenStartIndex = cookieValue.indexOf("=") + 1;
    const stopIndex = cookieValue.indexOf(";") - 1;
    const jwtToken = cookieValue.substring(tokenStartIndex, stopIndex);
    const decodedToken = jwt.decode(jwtToken);
    role = decodedToken.role || "";
  }

  if (path.includes("/admin")) {
    if (isCookieSet && role === "admin") {
      return NextResponse.next();
    } else if (isCookieSet && role === "user") {
      return NextResponse.redirect(new URL("/user/dashboard", request.nextUrl));
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (path.includes("/user")) {
    if (isCookieSet && role === "user") {
      return NextResponse.next();
    } else if (isCookieSet && role === "admin") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.nextUrl)
      );
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (path === "/login") {
    if (isCookieSet && role === "user") {
      return NextResponse.redirect(new URL("/user/dashboard", request.nextUrl));
    } else if (isCookieSet && role === "admin") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.nextUrl)
      );
    }
    return NextResponse.next();
  }
  if (path === "/auth/logout") {
    if (isCookieSet) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (path === "/dashboard") {
    if (isCookieSet && role === "user") {
      return NextResponse.redirect(new URL("/user/dashboard", request.nextUrl));
    } else if (isCookieSet && role === "admin") {
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.nextUrl)
      );
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.redirect(new URL("/login", request.nextUrl));
}
export const config = {
  matcher: [
    "/user/:path*",
    "/login",
    "/auth/logout",
    "/admin/:path*",
    "/dashboard",
  ],
};
