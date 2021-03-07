import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TableMonthHourAverage } from "./TableMonthHourAverage";
import { TableMonthHourMax } from "./TableMonthHourMax";
import { TableMonthHourOver } from "./TableMonthHourOver";

export function TableMonthHourChooser() {
  const [table, setTable] = useState("Average");
  const [max, setMax] = useState(50);

  return (
    <>
      <ButtonGroup>
        <Button
          active={table === "Average"}
          onClick={() => setTable("Average")}
        >
          Average
        </Button>
        <Button active={table === "Max"} onClick={() => setTable("Max")}>
          Max
        </Button>
        <Button active={table === "Over"} onClick={() => setTable("Over")}>
          Over{" "}
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
