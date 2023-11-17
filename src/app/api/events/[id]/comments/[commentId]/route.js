import { connectMongoDb } from "@/lib/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";


const STATUS_FAILURE = {ok: false, code: 500}
const STATUS_SUCCESS = {ok: true, code: 200}

/**
 * 
 * @param {The request object} req 
 * @param {the object id's of the Parent event Id and commentId} param1 
 * @returns {NextResponse}
 */
export async function PUT(req, {params: { id, commentId }}) {

    /** @endpoint: /api/events/[eventId]/comments/[commentId] */

    try {
        await connectMongoDb()

        const data = await req.json()

        const comment = await Comment.findOneAndUpdate({_id: commentId}, data)
        if (!comment) {
            return new Response({message: "Comments could not be updated for this event", data: [], status: STATUS_FAILURE})
        }

        return new Response.json({
            data: comment,
            status: STATUS_SUCCESS,
        })
    } catch (error) {
        console.error
        return new Response.json({message: "Comments could not be updated for this post", status: STATUS_FAILURE})
    }
}


export async function DELETE(req, {params: { id, commentId }}) {

    /** @endpoint: /api/events/[eventId]/comments/[commentId] */

    try {
        await connectMongoDb()

        const data = await req.json()

        const comment = await Comment.findOneAndDelete({_id: commentId}, data)
        if (!comment) {
            return new NextResponse({message: "Comments could not be deleted for this event", data: [], status: STATUS_FAILURE})
        }

        return NextResponse.json({
            data: comment,
            status: STATUS_SUCCESS,
        })
    } catch (error) {
        console.error
        return new NextResponse.json({message: "Comments could not be deleted for this post", status: STATUS_FAILURE})
    }
}

