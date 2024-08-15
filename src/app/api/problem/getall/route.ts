import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
    try {
        const client = await clientPromise;
        const result = await client.db().collection("problems").find({}).sort({ created_at: -1 }).toArray();
        console.log(result)
        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }

}
