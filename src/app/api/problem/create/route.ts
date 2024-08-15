import { NextResponse } from 'next/server'
import clientPromise from "@/lib/mongodb";
import Case from '@/app/models/Problem';
import { headers } from 'next/headers';
import Problem from '@/app/models/Problem';
export async function POST(request: Request) {
    const headersList = headers()
    const member_id = headersList.get('member_id')
    const username = headersList.get('username')

    const formData = await request.json()
    console.log(formData)
    console.log(member_id, username)
    try {
        const newProb = new Problem({
            creator_id: member_id,
            title: formData.title,
            link: formData.link,
            hints: formData.hints,
            topics: formData.topics,
            description: formData.description
        });
        const client = await clientPromise;
        await client.db().collection("problems").insertOne(newProb);
        return NextResponse.json({ success: true, newProb }, { status: 200 });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ success: false, err }, { status: 500 });
    }

}




