import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
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
  if (path === "/logout") {
    if (isCookieSet) {
      const response = NextResponse.json({
        message: "Logout Successful",
        success: true,
      });
      response.cookies.set("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
      });
      return response;
    }
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.redirect(new URL("/login", request.nextUrl));
}
export const config = {
  matcher: ["/user/:path*", "/login", "/admin/:path*", "/dashboard", "/logout"],
};
