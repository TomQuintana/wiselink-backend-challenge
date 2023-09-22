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
    hour: {
      type: String 
    },
    date: {
      type: String,
    },
    status: {
      default: 'borrador',
      type: String
    }
  },
);

const EventModel = model("events", UserSchema);

export default EventModel; 
