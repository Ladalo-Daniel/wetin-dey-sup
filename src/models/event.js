import mongoose, { Schema } from "mongoose";


const eventSchema = new Schema(
    {
        creator: {
            type: Object,
        },
        creatorData: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        },
        eventTitle: {
            type: String,
        },
        eventLocation: {
            type: String,
        },
        eventMonth: {
            type: String,
        },
        eventDay: {
            type: String,
        },
        eventTime: {
            type: String,
        },
        eventDate: {
            type: String,
        },
        eventTag: {
            type: String,
        },
        eventImage: {
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

