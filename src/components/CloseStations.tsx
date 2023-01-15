import React from "react";
import { HOURS } from "../types";
import { pickStyle, SCALES } from "./colorScale";
import styles from "./CloseStations.module.css";
import { useTypedSelector } from "../store/hooks";
import {
  selectCloseHistories,
  selectCloseStations,
  selectCurrentDayPoints,
} from "../store/day/closeStations";
import {
  selectCurrentDay,
  selectDayAfter,
  selectDayBefore,
  selectToday,
} from "../store/day/daySelection";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export function CloseStations() {
  const closeHistories = useTypedSelector(selectCurrentDayPoints);
  const dispatch = useDispatch();
  const day = useTypedSelector(selectCurrentDay);
  const weekDay = new Date(day).toLocaleDateString("ca-ES", {
    weekday: "long",
  });
  return (
    <div>
      <h5>CloseStations</h5>
      <div>
        <Button size="sm" onClick={() => dispatch(selectDayBefore())}>
          -
        </Button>{" "}
        <Button size="sm" onClick={() => dispatch(selectToday())}>
          Today
        </Button>{" "}
        <Button size="sm" onClick={() => dispatch(selectDayAfter())}>
          +
        </Button>{" "}
        Day: {day}, {weekDay} (NO2)
        <div style={{ height: "5px" }}></div>
      </div>
      <table className={styles.table}>
        <Header />
        {HOURS.map((hour) => (
          <RowHour key={hour} hour={hour} closeHistories={closeHistories} />
        ))}
      </table>
      <br />
      <br />
    </div>
  );
}

function Header() {
  const closeStations = useTypedSelector(selectCloseStations);
  return (
    <Row className={styles.header}>
      <Cell>&nbsp;</Cell>
      {closeStations.map((station) => (
        <div key={station} className={styles.vertCell}>
          {station}
        </div>
      ))}
    </Row>
  );
}

function RowHour({ hour, closeHistories }: any) {
  return (
    <Row>
      <Cell>{hour}</Cell>
      {closeHistories.map((history: any, index: number) => {
        return (
          <Cell key={index} value={history?.[hour]}>
            {history?.[hour] || null}
          </Cell>
        );
      })}
    </Row>
  );
}

function Row({ className, children }: any) {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
}

function Cell({ children, value }: any) {
  const scale = SCALES["NO2"];
  return (
    <div className={styles.cell} style={pickStyle(scale, value)}>
      {children}
    </div>
  );
}
