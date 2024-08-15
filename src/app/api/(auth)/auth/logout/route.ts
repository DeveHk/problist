import { NextResponse } from 'next/server'
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    try {
        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        if (!accessToken) {
            return NextResponse.json({ isAuthenticated: false, message: "No acess token found" }, { status: 400 });
        }
        cookies().delete("accessToken");
        return NextResponse.json({ isAuthenticated: false, message: "Deleted the token" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ isAuthenticated: false, message: "Internal server Error", err }, { status: 500 });

    }
}



