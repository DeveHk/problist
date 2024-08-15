import { verify } from "@/lib/jwt-util";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function jwtMiddlewareAdminProtected(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");

    if (!accessToken) {
        //console.log("Admin Protected: No Access Token");
        return NextResponse.redirect(new URL('/team', request.url));
    }

    try {
        //console.log("Admin Protected: With Token");
        const payload = await verify(accessToken.value);

        if (!payload.isAdmin) {
            //console.log("Admin Protected: Not an Admin");
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        return NextResponse.next();
    } catch (err) {
        console.error("Admin Protected: Token Verification Failed");
        return NextResponse.redirect(new URL('/team', request.url));
    }
}
