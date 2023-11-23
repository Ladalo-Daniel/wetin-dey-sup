import { connectMongoDb } from "@/lib/mongodb"
import Event from "@/models/event";
import { NextResponse } from "next/server";

//Getting all events
export async function GET(req) {
    try {
      // Connect to the DB
      await connectMongoDb();
      //get the data using the model
      const events = await Event.find()
      .populate("creator")
      .sort({ createdAt: -1 })
      .limit(100);
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
  
  
  
  