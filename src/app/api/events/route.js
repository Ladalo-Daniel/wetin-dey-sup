import { NextResponse } from "next/server"
import Event from "@/models/Event";
import connectDB from "@/utils/db";

export const GET = async (request) => {
    try{
        await connectDB()
        const events = await Event.find();
        return new NextResponse(events, { status: 200 });
    } catch(err) {
        return new NextResponse("Database Error", { status: 500 });
    }

}