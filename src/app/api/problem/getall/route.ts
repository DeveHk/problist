import { NextResponse } from 'next/server';
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const problemsCollection = db.collection("problems");
        const result = await problemsCollection.find({}).sort({ created_at: -1 }).toArray();
        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }

}
