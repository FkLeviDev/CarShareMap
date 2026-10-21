/** Globális keresőből érkező ugrási cél (zóna + opcionálisan parkolóhely) */
export interface SearchFocus {
  zoneId: string;
  spotId?: string;
  /** Egyedi kulcs, hogy ugyanarra a találatra újra kattintva is lefusson */
  key: number;
}

export type SearchResultKind = 'car' | 'zone' | 'spot';

export interface SearchResult {
  kind: SearchResultKind;
  id: string;
  title: string;
  subtitle: string;
  zoneId: string;
  spotId?: string;
}

export interface SearchResultGroup {
  kind: SearchResultKind;
  label: string;
  icon: string;
  items: SearchResult[];
}
