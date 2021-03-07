import React from "react";
import { HOURS } from "../types";
import { pickStyle } from "./colorScale";
import styles from "./TableMonthHour.module.css";

const MONTHS = [
  "gen",
  "feb",
  "maç",
  "abr",
  "mag",
  "jun",
  "jul",
  "ago",
  "set",
  "oct",
  "nov",
  "dec",
];

export function TableMonthHour({ table, scale }: any) {
  return (
    <table className={styles.table}>
      <Header />
      {HOURS.map((hour, hourIndex) => (
        <RowHour
          key={hour}
          hour={hour}
          hourIndex={hourIndex}
          table={table}
          scale={scale}
        />
      ))}
    </table>
  );
}

function Header() {
  return (
    <Row className={styles.header}>
      <Cell />
      {MONTHS.map((month, index) => (
        <Cell key={index}>{month}</Cell>
      ))}
    </Row>
  );
}

function RowHour({ hour, hourIndex, table, scale }: any) {
  return (
    <Row>
      <Cell>{hour}</Cell>
      {MONTHS.map((_, monthIndex) => (
        <Cell
          key={monthIndex}
          scale={scale}
          value={table[hourIndex][monthIndex]}
        >
          {table[hourIndex][monthIndex]}
        </Cell>
      ))}
    </Row>
  );
}

function Row({ className, children }: any) {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
}

function Cell({ children, value, scale }: any) {
  return (
    <div className={styles.cell} style={pickStyle(scale, value)}>
      {children}
    </div>
  );
}
