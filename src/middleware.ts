import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SCRET!,
    });

    if (!session && path !== "/sign-in") {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    } else if (session) {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ["/"],
};