import React, { useCallback, useState } from "react";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { useTypedSelector } from "../store/hooks";
import { getSources } from "../store/sources/selectors";
import { estacioChanged } from "../store/sources/actions";
import { useDispatch } from "react-redux";
import { ESTACIONS } from "../service/loadEstacions";

const estacions = ESTACIONS;

export function EstacioChooser() {
  const [filter, setFilter] = useState("");
  const { estacio } = useTypedSelector(getSources);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>🔎</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Nom d'estació"
          value={filter}
          onChange={(ev) => setFilter(ev.target.value)}
        />
      </InputGroup>
      <ListGroup style={{ maxHeight: "370px", overflow: "scroll" }}>
        {estacions
          .filter(
            (name) =>
              !filter || name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((name) => (
            <Estacio key={name} name={name} current={estacio} />
          ))}
      </ListGroup>
    </>
  );
}

function Estacio({ name, current }: any) {
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(estacioChanged(name)), [name]);

  return (
    <ListGroup.Item action active={name === current} onClick={onClick}>
      {name}
    </ListGroup.Item>
  );
}
