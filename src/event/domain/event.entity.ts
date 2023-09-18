export interface EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  dateTime: Date;
  organizador: string;
  place: 'borrador' | 'publicado';
}
