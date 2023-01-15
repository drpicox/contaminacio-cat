import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "./components/Layout";
import { TableMonthHourChooser } from "./components/TableMonthHourChooser";
import { ContaminantChooser } from "./components/ContaminantChooser";
import { EstacioChooser } from "./components/EstacioChooser";
import { WeekdaysChooser } from "./components/WeekdaysChooser";
import { YearsChooser } from "./components/YearsChooser";
import { CloseStations } from "./components/CloseStations";

function App() {
  return (
    <Layout>
      <br />
      <Container>
        <Row>
          <CloseStations />
        </Row>
        <Row>
          <Col sm md lg xl>
            <TableMonthHourChooser />
            <br />
            <ContaminantChooser />
            <br />
            <WeekdaysChooser />
            <br />
            <YearsChooser />
          </Col>
          <Col sm md lg xl>
            <EstacioChooser />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default App;
