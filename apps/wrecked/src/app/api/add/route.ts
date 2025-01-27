import { drizzle } from "drizzle-orm/libsql";
import { NextRequest } from "next/server";
import { loggingBase } from "../db/schema";

export async function POST(request: NextRequest){
    console.log( await request.json())
    const db = drizzle(process.env.DB_FILE_NAME || "")
    await db.insert(loggingBase).values({ requestSendAt: BigInt(11111111) , level : "WARNING", message:"www", fileName:"hhh" })
    const res = await db.select().from(loggingBase)
    console.log(res)
    return Response.json({hello:"hello"})
}
