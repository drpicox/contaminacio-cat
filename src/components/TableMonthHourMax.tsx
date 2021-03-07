import React from "react";
import { createSelector } from "reselect";
import { useTypedSelector } from "../store/hooks";
import { getTable } from "../store/table/selectors";
import { DerivedTable } from "../store/table/types";
import { NO2_SCALE } from "./colorScale";
import { TableMonthHour } from "./TableMonthHour";

export const getMaxTable = createSelector(
  getTable,
  (table): DerivedTable =>
    table.map((row) =>
      row.map((entry) => {
        const { count, values } = entry;

        if (!count) return null;
        return Math.max(...values);
      })
    )
);

export function TableMonthHourMax() {
  const table = useTypedSelector(getMaxTable);

  return <TableMonthHour table={table} scale={NO2_SCALE} />;
}
