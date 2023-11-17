import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    title: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    imageUrl: {
        type: String,
    },
    likes: [{type: Schema.Types.ObjectId, ref: "Users"}],
  },
  { timestamps: true }
);

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;