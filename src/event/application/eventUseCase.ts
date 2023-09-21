import { EventRepository } from "../domain/event.repository";
import { EventValue } from "../domain/event.value";

export class EventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

  public registerEvent = async({title, shortDescription, longDescription, dateTime, host, place, status}) => {
    const eventValue = new EventValue({title, shortDescription, longDescription, dateTime, host, place, status});

    const eventCreated = await this.eventRepository.registerEvent(eventValue);

    return eventCreated;
  };

  public obtainAllEvents = async () => {
    const events = await this.eventRepository.allEvents();
    return events;
  };

  public removeEvent = async (id: string) => {
    const eventRemoved = await this.eventRepository.removeEvent(id);
    return eventRemoved;
  };
  
}
