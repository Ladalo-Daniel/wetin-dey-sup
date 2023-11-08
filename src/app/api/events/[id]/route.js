import { connectMongoDb } from "@/lib/mongodb";
import Event from "@/models/event";
import { NextResponse } from "next/server";


//GETTING A SINGLE EVENT BY ID
export async function GET(req, { params: { id } }) {
  try {
    // Connect to the DB
    await connectMongoDb();
    // using the model to find and retrieve
    const event = await Event.findOne({ _id: id });

    if (!event) {
      return NextResponse.json(
        {
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Ok",
        data: event,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch Event",
        error,
      },
      {
        status: 500,
      }
    );
  }
}


//Route for Updating the event by ID
export async function PUT(req, { params: { id } }) {
  // Get the data from the request
  const body = await req.json();

  try {
    // Connect to the DB
    await connectMongoDb();

    // Use the Model to update
    const updatedEvent = await Event.findByIdAndUpdate(id, body, { new: true });
    
    if (!updatedEvent) {
      return NextResponse.json(
        {
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Event Updated successfully",
        data: updatedEvent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update the Event",
        error: error.message, // Providing the error message for better clarity
      },
      {
        status: 500,
      }
    );
  }
}


//A route for deleting an event by ID
export async function DELETE(req, { params: { id } }) {
  try {
    // Connect to the DB
    await connectMongoDb();

    // Using the Model to find and delete the event by ID
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json(
        {
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Event deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete the Event",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


