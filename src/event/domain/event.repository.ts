import { EventEntity } from "./event.entity";

export interface EventRepository {
  registerEvent(event: EventEntity): Promise<EventEntity| null>;
  allEvents(): Promise<EventEntity | null>
}
