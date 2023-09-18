import { EventEntity } from "./event.entity";

export class EventValue implements EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  dateTime: Date;
  organizador: string;
  place: 'borrador' | 'publicado';  

  constructor({title, shortDescription, longDescription, dateTime, organizador, place}: {title: string, shortDescription: string, longDescription: string, dateTime: Date, organizador: string, place: 'borrador' | 'publicado'}) {
    this.title = title;
    this.longDescription = longDescription;
    this.shortDescription = shortDescription;
    this.dateTime = dateTime;
    this.organizador = organizador;
    this.place = place;
  }
}
