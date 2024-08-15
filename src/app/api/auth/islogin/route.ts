import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
        return NextResponse.json({ isAuthenticated: false });
    }
    jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET as string,
        async (err: any, user: any) => {
            if (err) {
                return NextResponse.json({ isAuthenticated: false, err });
            }
            return NextResponse.json({ isAuthenticated: true });
        }
    );

}



