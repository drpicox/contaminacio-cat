import React, { useCallback } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getFilters } from "../store/filters/selectors";
import { weekdayToggled } from "../store/filters/actions";
import { useDispatch } from "react-redux";

const weekdaysNames = ["", "dll", "dm", "dx", "dj", "dv", "ds", "dg"];

export function WeekdaysChooser() {
  const { weekdays } = useTypedSelector(getFilters);

  return (
    <ButtonGroup>
      {weekdaysNames.map(
        (name, index) =>
          name && (
            <Weekday
              key={name}
              name={name}
              value={index}
              active={weekdays[index]}
            />
          )
      )}
    </ButtonGroup>
  );
}

function Weekday({ name, value, active }: any) {
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(weekdayToggled(value)), [
    value,
    dispatch,
  ]);

  return (
    <Button active={active} onClick={onClick}>
      {name}
    </Button>
  );
}
