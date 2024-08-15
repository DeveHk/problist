import { verify } from "@/lib/jwt-util";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function jwtMiddlewareApi(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");

    if (!accessToken) {
        return NextResponse.next();
    }
    try {
        //console.log("API: With Token");
        const payload = await verify(accessToken.value);
        console.log(payload)
        const newHeaders = new Headers(request.headers);
        newHeaders.set('member_id', String(payload._id));
        newHeaders.set('username', String(payload.username));
        return NextResponse.next({
            request: {
                headers: newHeaders,
            },
        });
    } catch (err) {
        console.error("API: Token Verification Failed", err);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
