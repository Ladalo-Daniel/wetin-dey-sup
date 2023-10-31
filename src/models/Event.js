import mongoose from "mongoose";

const {Schema} = mongoose;

const eventSchema = new Schema({
    //just for test 
      heading: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        max: 100,
      },
      desc: {
        type: String,
        max: 500,
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      },
});

export default mongoose.model("Event", eventSchema);