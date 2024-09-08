import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const blog = await prisma.blog.create({
      data,
    });

    return NextResponse.json(
      { message: "Data submitted successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error?.toString() },
      { status: 500 }
    );
  }
}
