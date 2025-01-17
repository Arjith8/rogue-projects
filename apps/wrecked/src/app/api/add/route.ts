import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    console.log( await request.json())
    return Response.json({hello:"hello"})
}
