import React from "react";
import { createSelector } from "reselect";
import { useTypedSelector } from "../store/hooks";
import { getTable } from "../store/table/selectors";
import { DerivedTable } from "../store/table/types";
import { getSources } from "../store/sources/selectors";
import { SCALES } from "./colorScale";
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
  const { contaminant } = useTypedSelector(getSources);
  const scale = SCALES[contaminant];

  return <TableMonthHour table={table} scale={scale} />;
}
