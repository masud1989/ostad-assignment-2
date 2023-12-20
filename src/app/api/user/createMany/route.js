import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function POST (req, res){
    try {
        const  Prisma = new PrismaClient()
        const PostBody = await req.json()

        const Result = await Prisma.users.createMany({
            data: PostBody
        })
        

        return NextResponse.json({status: "success", data: Result });

    } catch (error) {
        return NextResponse.json({ status: "fail", msg: error.toString() }); 
    }
}