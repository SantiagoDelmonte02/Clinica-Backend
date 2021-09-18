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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {/* <td>1</td>
                <td>Juan</td>
                <td>Perez</td>
                <td>1234</td>
                <td><button onclick={eliminar(12)} class="btn btn-danger btn_delete" id="btnEliminar">x</button></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Consultas;
