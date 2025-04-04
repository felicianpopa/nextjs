import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark123");
  }
  response.headers.set("Custom-Header", "Custom header value");

  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return response;
}
