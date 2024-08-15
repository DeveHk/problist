import { NextResponse } from 'next/server'
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from 'mongodb';
import { cookies } from 'next/headers';
import { sign } from '@/lib/jwt-util';
export async function POST(request: Request) {
    const formData = await request.formData()
    const userID = formData.get('userID')?.toString();
    const key = formData.get('key')?.toString();
    console.log("we got:", { userID, key })
    if (!key)
        return NextResponse.json({ valid: false }, { status: 401 })

    const client = await clientPromise;
    const result = await client.db().collection("members").findOne({ username: userID });
    if (!result) {
        return NextResponse.json({ valid: false }, { status: 401 })
    }
    const keyresult = await client.db().collection("keys").findOne({ p_id: result._id });
    if (!keyresult)
        return NextResponse.json({ valid: false }, { status: 401 })
    const validPassword = await bcrypt.compare(key, keyresult.key);
    console.log(validPassword)
    if (!validPassword) {
        return NextResponse.json({ valid: false }, { status: 201 })
    }
    const accessToken = await sign({ cool: "yes" })
    cookies().set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        path: "/",
        expires: new Date(Date.now() + 6 * 60 * 60 * 1000),
    });
    return NextResponse.json({ valid: true }, {
        status: 200
    },)
}



