import { nextAuthPages } from "@/config";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: nextAuthPages,
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
