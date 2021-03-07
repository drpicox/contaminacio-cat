import React, { useCallback } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getSources } from "../store/sources/selectors";
import { contaminantChanged } from "../store/sources/actions";
import { useDispatch } from "react-redux";

const contaminants = [
  //
  "NO",
  "NO2",
  "NOX",
  "O3",
  "PM10",
  "H2S",
  "SO2",
];

export function ContaminantChooser() {
  const { contaminant } = useTypedSelector(getSources);

  return (
    <ButtonGroup>
      {contaminants.map((name) => (
        <Contaminant key={name} name={name} current={contaminant} />
      ))}
    </ButtonGroup>
  );
}

function Contaminant({ name, current }: any) {
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(contaminantChanged(name)), [name]);

  return (
    <Button active={name === current} onClick={onClick}>
      {name}
    </Button>
  );
}
