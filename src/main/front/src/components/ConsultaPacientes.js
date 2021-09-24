import React, { Component } from "react";
import "./styles/Consultas.css";
//import swal from 'sweetalert';

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

  eliminarPaciente = (evt) => {
    if(window.confirm("Seguro que desea eliminar el paciente con id: " + evt.target.id + "?")) {
      fetch("/pacientes/" + evt.target.id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      alert("Paciente eliminado!");
      this.cargarPacientes();
    } else {
      alert("Operacion cancelada!")
    }
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
                    <td style={{width: "25%"}}><button id={paciente.id} class="btn btn-danger" onClick={this.eliminarPaciente}>Eliminar</button> <button class="btn btn-info" >Editar</button></td>
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
