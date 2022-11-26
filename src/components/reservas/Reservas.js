import { Tab, Tabs } from "react-bootstrap";
import FormularioReservas from "./FormularioReservas";
import TusReservas from "./TusReservas";
import "./reservas.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reservacion() {
  return (
    <Tabs defaultActiveKey={"reservacion"}  justify className="tabsReservas" >
      <Tab 
      title={"Hacer una reservación"} 
      eventKey={"reservacion"}>
        <FormularioReservas></FormularioReservas>
      </Tab>

      <Tab
        title={"Ver tus reservas"}
        eventKey={"reservaciones"}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <TusReservas></TusReservas>
      </Tab>
    </Tabs>
  );
}
