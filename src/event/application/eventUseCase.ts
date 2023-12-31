import { EventRepository } from "../domain/event.repository";
import { EventValue } from "../domain/event.value";

export class EventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  public registerEvent = async({title, shortDescription, longDescription, date, hour, host, place, status}) => {
    const eventValue = new EventValue({title, shortDescription, longDescription, date, hour, host, place, status});

    const eventCreated = await this.eventRepository.registerEvent(eventValue);

    return eventCreated;
  };

  public obtainAllEvents = async () => {
    const events = await this.eventRepository.allEvents();
    return events;
  };

  public getPublicEvent = async () => {
    const events = await this.eventRepository.obtainPublishedEvent();
    return events;
  };

  public removeEvent = async (id: string) => {
    const eventRemoved = await this.eventRepository.removeEvent(id);
    return eventRemoved;
  };

  public updateEventById = async (id: string, data: object) => {
    return await this.eventRepository.updateEventById(id, data);
  };

  public findEventById = async(id: string) => {
    return await this.eventRepository.findEventById(id);
  };
  
}
