import { connectMongoDb } from "@/lib/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import ProviderUser from "@/models/ProviderUsers";

export async function POST(req) {
  try {
    const { name, email, password, profilePicture } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();
    await Users.create({ name, email, password: hashedPassword, profilePicture });
    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "an error occured while registering" },
      { status: 500 }
    );
  }
}


