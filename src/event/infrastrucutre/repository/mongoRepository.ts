import { EventEntity } from "../../domain/event.entity";
import { EventRepository } from "../../domain/event.repository";
import EventModel from "../model/model.event";

export class MongoRepository implements EventRepository {

  async registerEvent(eventIn: EventEntity): Promise<any> {
    const event = await EventModel.create(eventIn);
    return event;
  }

  async allEvents(): Promise<any> {
    const allEvents = await EventModel.find({});
    return allEvents;
  }

}
