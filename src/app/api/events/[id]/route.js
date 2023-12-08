import { connectMongoDb } from "@/lib/mongodb";
import Event from "@/models/event";
import { NextResponse } from "next/server";


//GETTING A SINGLE EVENT BY ID  for dynamic routing
export async function GET(req, { params: { id } }) {
  try {
    // Connect to the DB
    await connectMongoDb();
    // using the model to find and retrieve
    const event = await Event.findOne({ _id: id })
    .populate("creatorData")
    ;

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


// Route for Updating the event by ID
export async function PUT(req, { params: { id } }) {
  // Get the data from the request
  const body = await req.json();

  try {
    // Connect to the DB
    await connectMongoDb();

    // finding the event by id
    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        {
          message: "Event not found",
        },
        { status: 404 }
      );
    }


    // Log values for debugging
    // console.log("event.userId:", event.userId);
    // console.log("req.body.userId:", body.userId);

    //Check if the user updating the event is the owner
    if (event.userId !== body.userId) {
      return NextResponse.json(
        {
          message: "You can only update your own event",
        },
        { status: 403 }
      );
    }

   // Use the Model to update with additional condition
   const updatedEvent = await Event.findOneAndUpdate(
    { _id: id, userId: body.userId }, // additional condition to ensure ownership
    body,
    { new: true }
  );

  if (!updatedEvent) {
    return NextResponse.json(
      {
        message: "Failed to update the event",
      },
      { status: 500 }
    );
  }


    return NextResponse.json(
      {
        message: "Event updated successfully",
        data: updatedEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update the event",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}



// A route for deleting an event by ID
export async function DELETE(req, { params: { id } }) {
  const body = await req.json();
  try {
    // Connect to the DB
    await connectMongoDb();

    // Using the Model to find the event by ID
    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        {
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    // Log values for debugging
    // console.log("event.userId:", event.userId);
    // console.log("req.body.userId:", body.userId);

    //Check if the event's userId matches the request's userId
    if (event.userId !== body.userId) {
      return NextResponse.json(
        {
          message: "You can only delete your own event",
        },
        { status: 403 }
      );
    }

    // Delete the event
    await event.deleteOne();

    return NextResponse.json(
      {
        message: "Event deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete the event",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


