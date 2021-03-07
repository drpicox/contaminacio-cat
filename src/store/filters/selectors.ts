import { createSelector } from "reselect";
import { RootState } from "..";
import { getHistory } from "../history/selectors";
import { FiltersState } from "./types";

export function getFilters(state: RootState): FiltersState {
  return state.filters;
}

export const getFilteredHistory = createSelector(
  getHistory,
  getFilters,
  (history, filters) => {
    let result = history;
    const { years, weekdays } = filters;

    result = result.filter((r) => years[r.year - 2010]);
    result = result.filter((r) => weekdays[r.dayOfTheWeek]);

    return result;
  }
);
