import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const jwt: RequestCookie | undefined = request.cookies.get("myToken");

  if (jwt !== undefined && process.env.JWT_SECRET !== undefined) {
    try {
      const secretKey: CryptoKey | Uint8Array = new TextEncoder().encode(
        process.env.JWT_SECRET
      );
      await jwtVerify(jwt.value, secretKey);

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard", "/admin/dashboard/:path*"],
};
