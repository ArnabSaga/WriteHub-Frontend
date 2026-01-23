import { NextRequest, NextResponse } from "next/server";

import { userService } from "./services/user.service";

import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  let isAuthenticatied = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticatied = true;
    isAdmin = data.user.role === Roles.admin;
  }

  // * User is not authenticatied
  if (!isAuthenticatied) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // * User is authenticatied and role = admin
  //* User can't visit user-dashboard
  if (isAdmin && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  // * User is authenticatied and role = USER
  //* User can't visit admin-dashboard
  if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
