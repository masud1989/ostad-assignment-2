import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function PUT(req) {
    try {
      const Prisma = new PrismaClient();
      const {searchParams} = new URL(req.url)
      const id = parseInt(searchParams.get('id')) 
  
      // const result = await Prisma.users.find({
      //   where: { id: id } 
      // });

      const result = await Prisma.users.findUnique({
        where: { id: id },  
      });
  
      return NextResponse.json({ status: "Student Data View Success", data: result});
    } 
    catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }