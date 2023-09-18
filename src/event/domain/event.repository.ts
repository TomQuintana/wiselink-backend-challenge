import { EventEntity } from "./event.entity";

export interface EventRepository {
  createEvent (
    title: string, 
    shortDescription: string,
    longDescription: string,
    dateTime: Date,
    organizador: string,
    place: 'borrador' | 'publicado',
  ): Promise<EventEntity> | null;
}
