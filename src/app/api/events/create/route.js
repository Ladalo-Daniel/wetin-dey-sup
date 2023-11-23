import { connectMongoDb } from "@/lib/mongodb"
import Event from "@/models/event";
import { NextResponse } from "next/server";

//Creating Events
// export const POST = async (req) => {
//   const body = await req.json();

//   const newEvent = new Event(body);

//   try {
//     await connectMongoDb();

//     await newEvent.save();

//     return new NextResponse("Event Created succesfully", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error: An error occured while creating", { status: 500 });
//   }
// };




const STATUS_FAILURE = {ok: false, code: 500}
const STATUS_SUCCESS = {ok: true, code: 200}




export async function POST(req) {
  try {
      await connectMongoDb()

      const data = await req.json()
      console.log(data)

      const event = await Event.create(data)
      if (!event) {
          return NextResponse({message: "event could not be created", data: [], status: STATUS_FAILURE})
      }

      return NextResponse.json({
          data: event,
          status: STATUS_SUCCESS,
      })
  } catch (error) {
      console.error
      return NextResponse.json({message: "Event could not be created", status: STATUS_FAILURE})
  }
}