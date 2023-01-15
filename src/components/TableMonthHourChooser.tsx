import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getSources } from "../store/sources/selectors";
import { TableMonthHourAverage } from "./TableMonthHourAverage";
import { TableMonthHourMax } from "./TableMonthHourMax";
import { TableMonthHourOver } from "./TableMonthHourOver";

export function TableMonthHourChooser() {
  const [table, setTable] = useState("Average");
  const [max, setMax] = useState(50);
  const { estacio } = useTypedSelector(getSources);

  return (
    <>
      <h5>{estacio}</h5>
      <ButtonGroup className="mb-2 mt-1">
        <Button
          active={table === "Average"}
          onClick={() => setTable("Average")}
        >
          Mitjana
        </Button>
        <Button active={table === "Max"} onClick={() => setTable("Max")}>
          Màxim
        </Button>
        <Button active={table === "Over"} onClick={() => setTable("Over")}>
          #per sobre de{" "}
          <input
            min="0"
            max="200"
            type="number"
            value={max}
            onChange={(ev) => setMax(+ev.target.value)}
          />
        </Button>
      </ButtonGroup>
      {table === "Average" && <TableMonthHourAverage />}
      {table === "Max" && <TableMonthHourMax />}
      {table === "Over" && <TableMonthHourOver max={max} />}
    </>
  );
}
