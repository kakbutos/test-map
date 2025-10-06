export interface Site {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

export interface SitesState {
  byId: Record<number, Site>;
  allIds: number[];
  loading: boolean;
  error: string | null;
}

