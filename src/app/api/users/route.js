import { connectMongoDb } from "../../../lib/mongodb";
import Users from "../../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password } = await req.json();
  await connectMongoDb();
  await Users.create({ name, email, password });
  return NextResponse.json({ message: "User registered..." }, { status: 201 });
}
