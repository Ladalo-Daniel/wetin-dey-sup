import { NextResponse } from "next/server";
import Users from "@/models/user";
import { connectMongoDb } from "@/lib/mongodb";

export async function POST(req) {
  try {
    await connectMongoDb();
    const {email} = await req.json();
    const user = await Users.findOne({ email }).select("_id");
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"login" });
  
  }
}
