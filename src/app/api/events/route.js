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


//Getting all events
export async function GET(req) {
  try {
    // Connect to the DB
    await connectMongoDb();
    //get the data using the model
    const events = await Event.find();
    return NextResponse.json(
      {
        message: "Ok: Events retrieved successfully",
        data: events,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Fetch events",
        error,
      },
      {
        status: 500,
      }
    );
  }
}



