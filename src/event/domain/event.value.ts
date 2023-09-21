import { EventEntity } from "./event.entity";

export class EventValue implements EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  host: string;
  place: string;
  status: 'borrador' | 'publicado';

  constructor({title, shortDescription, longDescription, host, place, status}: {title: string, shortDescription: string, longDescription: string, dateTime: Date, host: string, place:string, status:'borrador' | 'publicado'}) {
    this.title = title;
    this.longDescription = longDescription;
    this.shortDescription = shortDescription;
    this.host = host;
    this.place = place;
    this.status = status;
  }
}
