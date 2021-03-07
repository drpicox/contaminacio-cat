import { createSelector } from "reselect";
import { ImportsNotUsedAsValues } from "typescript";
import { HOURS } from "../../types";
import { getFilteredHistory } from "../filters/selectors";
import { StatsTable, TableEntry } from "./types";

export const getTable = createSelector(getFilteredHistory, (history) => {
  const result: StatsTable = [];
  for (let hourIndex = 0; hourIndex < 24; hourIndex += 1) {
    result[hourIndex] = [];
    for (let monthIndex = 0; monthIndex < 12; monthIndex += 1)
      result[hourIndex][monthIndex] = { count: 0, sum: 0, values: [] };
  }

  history.forEach((point: any) => {
    const monthIndex = point.month - 1;
    HOURS.forEach((hour, hourIndex) => {
      accumulate(result[hourIndex][monthIndex], point[hour]);
    });
  });

  return result;
});

function accumulate(previous: TableEntry, newValue: number) {
  previous.count += 1;
  previous.sum += newValue;
  previous.values.push(newValue);
}
