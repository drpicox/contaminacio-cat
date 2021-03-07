import React from "react";
import { createSelector } from "reselect";
import { useTypedSelector } from "../store/hooks";
import { getTable } from "../store/table/selectors";
import { DerivedTable } from "../store/table/types";
import { getSources } from "../store/sources/selectors";
import { SCALES } from "./colorScale";
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
  const { contaminant } = useTypedSelector(getSources);
  const scale = SCALES[contaminant];

  return <TableMonthHour table={table} scale={scale} />;
}
