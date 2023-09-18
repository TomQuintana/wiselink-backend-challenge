import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    title: {
      type: String,
    },
  },
);

const EventModel = model("events", UserSchema);

export default EventModel; 
