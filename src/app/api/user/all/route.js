import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET() {
    try {
      const Prisma = new PrismaClient();
      const result = await Prisma.users.findMany();
      return NextResponse.json({ status: "Success", Total: result.length, data: result });
    } 
    catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }


