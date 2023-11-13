import { connectMongoDb } from "@/lib/mongodb"
import Event from "@/models/event";
import { NextResponse } from "next/server";

//Creating Events
export const POST = async (req) => {
  const body = await req.json();

  const newEvent = new Event(body);

  try {
    await connectMongoDb();

    await newEvent.save();

    return new NextResponse("Event Created succesfully", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error: An error occured while creating", { status: 500 });
  }
};