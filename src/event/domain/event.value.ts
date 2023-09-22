import { EventEntity } from "./event.entity";

export class EventValue implements EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  host: string;
  place: string;
  date: string;
  hour: string;
  status: 'borrador' | 'publicada';

  constructor({title, shortDescription, longDescription, host, place, date, hour, status}: {title: string, shortDescription: string, longDescription: string, date: string, hour: string, host: string, place:string, status:'borrador' | 'publicada'}) {
    this.title = title;
    this.longDescription = longDescription;
    this.shortDescription = shortDescription;
    this.host = host;
    this.place = place;
    this.date = date;
    this.hour = hour;
    this.status = status;
  }
}
