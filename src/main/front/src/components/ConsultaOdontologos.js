import React, { Component } from "react";
import "./styles/Consultas.css";
//import swal from 'sweetalert';

class ConsultaOdontologos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrOdontologos : []
    }
  }

  cargarOdontologos = () => {
    console.log("Buscando todos los odontologos...");
    fetch("/odontologos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrOdontologos: data })
    })
    console.log("Array de odontologos: " + this.state.arrOdontologos);
  }

  componentDidMount() {
    this.cargarOdontologos();
  }

  eliminarOdontologo = (evt) => {
    if(window.confirm("Seguro que desea eliminar el odontologo con id: " + evt.target.id + "?")) {
      fetch("/odontologos/" + evt.target.id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      alert("Odontologo eliminado!");
      this.cargarOdontologos();
    } else {
      alert("Operacion cancelada!")
    }
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
              {this.state.arrOdontologos.map((odontologo, i) => {
                return (
                  <tr>
                    <td>{odontologo.id}</td>
                    <td>{odontologo.nombre} </td>
                    <td>{odontologo.apellido}</td>
                    <td>{odontologo.matricula}</td>
                    <td style={{width: "25%"}}><button id={odontologo.id} class="btn btn-danger" onClick={this.eliminarOdontologo}>Eliminar</button> <button class="btn btn-info" >Editar</button></td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConsultaOdontologos;
