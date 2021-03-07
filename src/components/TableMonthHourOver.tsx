import React from "react";
import { createSelector } from "reselect";
import { useTypedSelector } from "../store/hooks";
import { getTable } from "../store/table/selectors";
import { DerivedTable } from "../store/table/types";
import { NO2_SCALE } from "./colorScale";
import { TableMonthHour } from "./TableMonthHour";

export const getOverTable = createSelector(
  getTable,
  (_: any, { max }: any) => max,
  (table, max): DerivedTable =>
    table.map((row) =>
      row.map((entry) => {
        const { count, values } = entry;

        if (!count) return null;
        return values.filter((v) => v >= max).length;
      })
    )
);

export function TableMonthHourOver({ max }: any) {
  const table = useTypedSelector((s) => getOverTable(s, { max }));

  return <TableMonthHour table={table} scale={NO2_SCALE} />;
}
