import { EventEntity } from "./event.entity";

export interface EventRepository {
  registerEvent(event: EventEntity): Promise<EventEntity| null>;
  allEvents(): Promise<EventEntity | null>;
  obtainPublishedEvent(): Promise<EventEntity | null>;
  removeEvent(id: string): Promise<EventEntity | null>;
  updateEventById(id: string, data: object): Promise<EventEntity | null>;
}
