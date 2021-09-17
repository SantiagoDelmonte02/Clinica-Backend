import React, { Component } from "react";
import "./styles/Consultas.css";

import { cargarOdontologos } from './crud/get_odontologos';

class Consultas extends Component {
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
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default Consultas;
