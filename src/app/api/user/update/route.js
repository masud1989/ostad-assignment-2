import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function PUT(req) {
    try {
      const Prisma = new PrismaClient();
      const {searchParams} = new URL(req.url)
      const id = parseInt(searchParams.get('id')) 
      const postBody = await req.json()
  
      const result = await Prisma.users.update({
        where: { id: id },
        data: postBody  
      });
  
      return NextResponse.json({ status: "Student Data Update Success", data: result});
    } 
    catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }