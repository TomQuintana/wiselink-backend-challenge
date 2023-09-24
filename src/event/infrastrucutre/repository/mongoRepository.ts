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

  async obtainPublishedEvent(): Promise<any> {
    const events = await EventModel.find({ status: 'publicado'});
    return events;
  }

  async removeEvent(id: string): Promise<any> {
    const eventRemoved = await EventModel.findByIdAndDelete(id);
    return eventRemoved;
  }

  async updateEventById(id: string, data: object): Promise<any> {
    return await EventModel.findByIdAndUpdate(id, data);
  }

  async findEventById(id: string): Promise<any> {
    const eventById = await EventModel.findById(id);
    return eventById?.date;
  }
  
}
