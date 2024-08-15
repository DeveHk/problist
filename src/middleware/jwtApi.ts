import { verify } from "@/lib/jwt-util";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function jwtMiddlewareApi(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");

    if (!accessToken) {
        //console.log("API: No Access Token");
        return NextResponse.next();
    }

    try {
        //console.log("API: With Token");
        const payload = await verify(accessToken.value);

        const newHeaders = new Headers(request.headers);
        newHeaders.set('member_id', String(payload._id));
        newHeaders.set('is_Admin', String(payload.isAdmin));

        return NextResponse.next({
            request: {
                headers: newHeaders,
            },
        });
    } catch (err) {
        console.error("API: Token Verification Failed", err);
        return NextResponse.redirect(new URL('/', request.url));
    }
}
