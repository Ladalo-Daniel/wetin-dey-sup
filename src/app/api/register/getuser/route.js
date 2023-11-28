import { connectMongoDb } from "@/lib/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Connect to the DB
    await connectMongoDb();
    //get the data using the model
    const users = await Users.find();
    return NextResponse.json(
      {
        message: "Ok",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch Users",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
