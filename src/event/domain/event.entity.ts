export interface EventEntity {
  title: string;
  shortDescription: string;
  longDescription: string;
  host: string;
  place: string,
  status: 'borrador' | 'publicado',
}
