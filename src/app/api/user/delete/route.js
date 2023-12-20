import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function DELETE(req) {
    try {
      const Prisma = new PrismaClient();
      const {searchParams} = new URL(req.url)
      const id = parseInt(searchParams.get('id')) 
  
      const result = await Prisma.users.delete({
        where: { id: id },  
      });
  
      return NextResponse.json({ status: "Student Data Delete Success", data: result});
    } 
    catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }