import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    title: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    host: {
      type: String
    },
    place: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now, // This sets the default value to the current date and time
    },
    status: {
      default: 'borrador',
      type: String
    }
  },
);

const EventModel = model("events", UserSchema);

export default EventModel; 
