import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtMiddlewareProtected } from './middleware/jwtProtected';
import { jwtMiddlewarePublic } from './middleware/jwtPublic';
import { jwtMiddlewareApi } from './middleware/jwtApi';

const jwtProtectPath = ['/dashboard'];
const jwtPublicPath = ['/login'];
export async function middleware(request: NextRequest) {
    const url = request.nextUrl;
    if (url.pathname.startsWith("/api")) {
        return jwtMiddlewareApi(request);
    }
    if (jwtProtectPath.some(path => url.pathname.startsWith(path))) {
        return jwtMiddlewareProtected(request);
    }
    if (jwtPublicPath.some(path => url.pathname.startsWith(path))) {
        return jwtMiddlewarePublic(request);
    }

}

export const config = {
    matcher: ['/login/:path*', '/dashboard/:path*', '/api/:path*'],
};