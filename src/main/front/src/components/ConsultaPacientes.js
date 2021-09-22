import React, { Component } from "react";
import "./styles/Consultas.css";

class ConsultaPacientes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrPacientes : []
    }
  }

  cargarPacientes = () => {
    fetch("/pacientes")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrPacientes: data })
    })
  }

  componentDidMount() {
    this.cargarPacientes();
  }

  eliminar = (evt) => {
    console.log("Eliminando paciente con id: " + evt.target.id);
  }

  render() {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

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
              {this.state.arrPacientes.map((paciente, i) => {
                return (
                  <tr>
                    <td>{paciente.id}</td>
                    <td>{paciente.nombre} </td>
                    <td>{paciente.apellido}</td>
                    <td>{paciente.dni}</td>
                    <td>{date}</td>
                    <td style={{width: "25%"}}><button id={paciente.id} class="btn btn-danger" onClick={this.eliminar}>Eliminar</button> <button class="btn btn-info" >Editar</button></td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConsultaPacientes;
