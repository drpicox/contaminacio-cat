export interface FiltersState {
  weekdays: boolean[];
  years: boolean[];
}

export const WEEKDAY_TOGGLED = "filters/WEEKDAY_TOGGLED";
export interface WeekdayToggledAction {
  type: typeof WEEKDAY_TOGGLED;
  value: number;
}

export const YEAR_TOGGLED = "filters/YEAR_TOGGLED";
export interface YearToggledAction {
  type: typeof YEAR_TOGGLED;
  value: number;
}

export type FilterActionTypes = WeekdayToggledAction | YearToggledAction;
