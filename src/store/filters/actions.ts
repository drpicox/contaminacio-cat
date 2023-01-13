import {
  WeekdayToggledAction,
  WEEKDAY_TOGGLED,
  YearToggledAction,
  YEAR_TOGGLED,
  YearSelectedAction,
  YEAR_SELECTED,
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

export function yearSelected(value: number): YearSelectedAction {
  return {
    type: YEAR_SELECTED,
    value,
  };
}
