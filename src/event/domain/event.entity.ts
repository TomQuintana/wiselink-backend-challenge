export interface EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  host: string;
  place: string,
  date: string,
  hour: string
  status: 'borrador' | 'publicada', //TODO: change value to publicada
}
