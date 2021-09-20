import React, { Component } from "react";
import "./styles/Consultas.css";

import { cargarOdontologos } from './crud/get_odontologos';

class ConsultaOdontologos extends Component {

  // manejar consultas con array interno en constructor para renderizar con odontologos.map()

  componentDidMount() {
    cargarOdontologos();
  }

  render() {
    return (
      <div>
        <table class="table table-bordered" id="odontologos">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Matricula</th>
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

export default ConsultaOdontologos;
