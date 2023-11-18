import { connectMongoDb } from "@/lib/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";


const STATUS_FAILURE = {ok: false, code: 500}
const STATUS_SUCCESS = {ok: true, code: 200}

/** @endpoint: /api/events/[eventId]/comments */

export async function GET(req, { params }) {
    try {
      await connectMongoDb();
  
      const eventId = params?.id;
      console.log(params)
      if (!eventId) {
        return Response.json({
          message: "Event ID is missing in the request",
          status: STATUS_FAILURE,
        });
      }
  
      const comments = await Comment.find({ event: eventId })
      .populate(["event"])
      .populate("creator")
      .populate("likes");
      
      if (!comments || comments.length === 0) {
        return Response.json({
          message: "Comments could not be loaded for this event",
          status: STATUS_FAILURE,
        });
      }
  
      return Response.json({
        data: comments,
        status: STATUS_SUCCESS,
      });
    } catch (error) {
      console.error(error);
      return Response.json({
        message: "An error occurred while fetching comments",
        status: STATUS_FAILURE,
      });
    }
  }
  

export async function POST(req) {
    try {
        await connectMongoDb()

        const data = await req.json()
        console.log(data)

        const comment = await Comment.create(data)
        if (!comment) {
            return NextResponse({message: "Comments could not be added for this event", data: [], status: STATUS_FAILURE})
        }

        return NextResponse.json({
            data: comment,
            status: STATUS_SUCCESS,
        })
    } catch (error) {
        console.error
        return NextResponse.json({message: "Comments could not be added for this post", status: STATUS_FAILURE})
    }
}

