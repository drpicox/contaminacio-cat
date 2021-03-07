import React from "react";
import { createSelector } from "reselect";
import { useTypedSelector } from "../store/hooks";
import { getTable } from "../store/table/selectors";
import { DerivedTable } from "../store/table/types";
import { NO2_SCALE } from "./colorScale";
import { TableMonthHour } from "./TableMonthHour";

export const getAverageTable = createSelector(
  getTable,
  (table): DerivedTable =>
    table.map((row) =>
      row.map((entry) => {
        const { count, sum } = entry;
        if (!count) return null;
        return Math.floor(sum / count);
      })
    )
);

export function TableMonthHourAverage() {
  const table = useTypedSelector(getAverageTable);

  return <TableMonthHour table={table} scale={NO2_SCALE} />;
}
