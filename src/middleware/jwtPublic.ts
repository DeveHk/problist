
import { verify } from "@/lib/jwt-util";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function jwtMiddlewarePublic(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");
    if (!accessToken)
        return NextResponse.next();
    try {
        const payload = await verify(accessToken.value)
        return NextResponse.redirect(new URL('/dashboard', request.url))
    } catch (err) {
        return NextResponse.next();
    }
}