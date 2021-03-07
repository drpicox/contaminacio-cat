export interface TableEntry {
  count: number;
  sum: number;
  values: number[];
}

export type StatsTable = TableEntry[][];

export type DerivedTable = (number | null)[][];
