import { connectMongoDb } from "@/lib/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();
    await Users.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "an error occured while registering" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDb();
  const topics = await Users.find()
  return NextResponse.json({topics})
}
