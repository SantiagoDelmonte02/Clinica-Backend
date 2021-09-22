import React, { Component } from "react";
import "./styles/Consultas.css";

class ConsultaOdontologos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrOdontologos : []
    }
  }

  cargarOdontologos = () => {
    fetch("/odontologos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrOdontologos: data })
    })
  }

  componentDidMount() {
    this.cargarOdontologos();
  }

  eliminar = (evt) => {
    console.log("Eliminando odontologo con id: " + evt.target.id);
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
                    <td style={{width: "25%"}}><button id={odontologo.id} class="btn btn-danger" onClick={this.eliminar}>Eliminar</button> <button class="btn btn-info" >Editar</button></td>
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
