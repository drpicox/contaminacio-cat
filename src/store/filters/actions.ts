import {
  WeekdayToggledAction,
  WEEKDAY_TOGGLED,
  YearToggledAction,
  YEAR_TOGGLED,
} from "./types";

export function weekdayToggled(value: number): WeekdayToggledAction {
  return {
    type: WEEKDAY_TOGGLED,
    value,
  };
}

export function yearToggled(value: number): YearToggledAction {
  return {
    type: YEAR_TOGGLED,
    value,
  };
}
