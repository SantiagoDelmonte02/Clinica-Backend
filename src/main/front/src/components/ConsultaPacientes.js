import React, { Component } from "react";
import "./styles/Consultas.css";

import { cargarPacientes } from './crud/get_pacientes'

class ConsultaPacientes extends Component {

  // manejar consultas con array interno en constructor para renderizar con pacientes.map()

  componentDidMount() {
    cargarPacientes();
  }

  render() {
    return (
      <div>
        <table class="table table-bordered" id="pacientes">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">DNI</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConsultaPacientes;
