import { verify } from "@/lib/jwt-util";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function jwtMiddlewareProtected(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");
    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
        const payload = await verify(accessToken.value);
        return NextResponse.next();
    } catch (err) {
        console.error("Protected: Token Verification Failed", err);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
