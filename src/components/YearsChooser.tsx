import React, { useCallback } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getFilters } from "../store/filters/selectors";
import { yearSelected, yearToggled } from "../store/filters/actions";
import { useDispatch } from "react-redux";

const yearsNumbers = new Array<number>(14).fill(2010).map((y, i) => y + i);

export function YearsChooser() {
  const { years } = useTypedSelector(getFilters);

  return (
    <>
      <ButtonGroup>
        {yearsNumbers
          .slice(0, 7)
          .map(
            (name, index) =>
              name && (
                <Year
                  key={name}
                  name={name}
                  value={index}
                  active={years[index]}
                />
              )
          )}
      </ButtonGroup>
      <ButtonGroup>
        {yearsNumbers
          .slice(7)
          .map(
            (name, index) =>
              name && (
                <Year
                  key={name}
                  name={name}
                  value={index + 7}
                  active={years[index + 7]}
                />
              )
          )}
      </ButtonGroup>
    </>
  );
}

function Year({ name, value, active }: any) {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (ev: any) => {
      if (ev.shiftKey) dispatch(yearToggled(value));
      else dispatch(yearSelected(value));
    },
    [value, dispatch]
  );

  return (
    <Button active={active} onClick={onClick}>
      {name}
    </Button>
  );
}
