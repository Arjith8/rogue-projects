import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    console.log(request)
    return Response.json({hello:"hello"})
}
