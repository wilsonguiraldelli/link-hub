import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";

import { isRoutePublic } from "./app/utils/middleware";

const middleware: NextMiddlewareWithAuth = async (req: NextRequestWithAuth) => {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
  });

  // User is Signed in and is trying to access `/login`.
  // Redirects to `/`.
  if (token && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // User is not Signed in and is trying to access a private route.
  // Redirects to `/login`.
  if (!token && !isRoutePublic(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // User is accessing a public route.
  // Should never redirect.
  if (isRoutePublic(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};

export default middleware;
