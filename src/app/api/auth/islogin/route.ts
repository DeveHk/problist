import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
import { verify } from '@/lib/jwt-util';

export async function GET(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    if (!accessToken) {
        return NextResponse.json({ isAuthenticated: false }, { status: 201 });
    }
    try {
        const paylaod = await verify(accessToken);
        return NextResponse.json({ isAuthenticated: true, ...paylaod }, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ isAuthenticated: false }, { status: 201 });
    }


}



