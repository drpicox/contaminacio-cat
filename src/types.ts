export const HOURS = [
  "h01",
  "h02",
  "h03",
  "h04",
  "h05",
  "h06",
  "h07",
  "h08",
  "h09",
  "h10",
  "h11",
  "h12",
  "h13",
  "h14",
  "h15",
  "h16",
  "h17",
  "h18",
  "h19",
  "h20",
  "h21",
  "h22",
  "h23",
  "h24",
];

export interface StationPoint {
  nom_estacio: string;
  altitud: string;
  latitud: string;
  longitud: string;
  magnitud: string;
  contaminant: string;
  unitats: string;
  tipus_estacio: string;
  area_urbana: string;
  codi_ine: string;
  municipi: string;
  codi_comarca: string;
  nom_comarca: string;
  data: string;
  date: Date;
  year: number;
  month: number;
  day: number;
  dayOfTheWeek: number;
  weekend: boolean;
  h01: number | null;
  h02: number | null;
  h03: number | null;
  h04: number | null;
  h05: number | null;
  h06: number | null;
  h07: number | null;
  h08: number | null;
  h09: number | null;
  h10: number | null;
  h11: number | null;
  h12: number | null;
  h13: number | null;
  h14: number | null;
  h15: number | null;
  h16: number | null;
  h17: number | null;
  h18: number | null;
  h19: number | null;
  h20: number | null;
  h21: number | null;
  h22: number | null;
  h23: number | null;
  h24: number | null;
}

export type StationHistory = StationPoint[];
