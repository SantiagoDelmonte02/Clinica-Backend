import React, { Component } from 'react';
import "./styles/Consultas.css";

class Turnos extends Component {

	constructor(props) {
		super(props);

		this.state = {
			arrTurnos: []
		}
	}

	cargarTurnos = () => {
    fetch("/turnos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrTurnos: data })
    })
  }

	componentDidMount() {
		this.cargarTurnos();
	}

	eliminarTurno = (evt) => {
    if(window.confirm("Seguro que desea eliminar el turno con id: " + evt.target.id + "?")) {
      fetch("/turnos/" + evt.target.id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      alert("Paciente eliminado!");
      this.cargarTurnos();
    } else {
      alert("Operacion cancelada!")
    }
  }

	formatDate(date) {
		let fecha = new Date(date);
		return fecha.toLocaleString("es-AR");
	}

	render() {
		return (
			<div>
				<h1>Proximos turnos</h1>
				<table class="table table-bordered" id="turnos">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Paciente</th>
							<th scope="col">Odontologo</th>
							<th scope="col">Fecha y Hora</th>
							<th scope="col">Accion</th>
						</tr>
					</thead>
					<tbody>
						{this.state.arrTurnos.map((turno, i) => {
							return (
								<tr>
									<td>{turno.id}</td>
									<td>{turno.paciente.nombre} {turno.paciente.apellido}</td>
									<td>{turno.odontologo.nombre} {turno.odontologo.apellido}</td>
									<td>{this.formatDate(turno.fechaTurno)}</td>
									<td><button id={turno.id} class="btn btn-danger" onClick={this.eliminarTurno}>Eliminar</button></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Turnos;
