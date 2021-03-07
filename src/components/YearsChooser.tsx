import React, { useCallback } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getFilters } from "../store/filters/selectors";
import { yearToggled } from "../store/filters/actions";
import { useDispatch } from "react-redux";

const yearsNumbers = new Array<number>(12).fill(2010).map((y, i) => y + i);

export function YearsChooser() {
  const { years } = useTypedSelector(getFilters);

  return (
    <ButtonGroup>
      {yearsNumbers.map(
        (name, index) =>
          name && (
            <Weekday
              key={name}
              name={name}
              value={index}
              active={years[index]}
            />
          )
      )}
    </ButtonGroup>
  );
}

function Weekday({ name, value, active }: any) {
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(yearToggled(value)), [
    value,
    dispatch,
  ]);

  return (
    <Button active={active} onClick={onClick}>
      {name}
    </Button>
  );
}
