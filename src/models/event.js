import mongoose, { Schema } from "mongoose";


const eventSchema = new Schema(
    {
        event_title: {
            type: String,
        },
        location: {
            type: String,
        },
        start_time: {
            type: String,
        },
        end_time: {
            type: String,
        },
        start_date: {
            type: String,
        },
        end_date: {
            type: String,
        },
        group: {
            type: String,
        },
        event_photo: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
          },
        likes: {
            type: Array,
            default: [],
          },
        
},
{ timestamps: true },
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;



// event_title: String,
// start_time: String,
// end_time: String,
// start_date: Date,
// end_date: Date,
// group: String,
// event_photo: String,