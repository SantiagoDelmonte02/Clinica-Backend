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
		// this.formateaHorarios(this.state.arrTurnos);
	}

	// formateaHorarios(array) {
	// 	for (let i = 0; i < array.length; i++) {
	// 		console.log("Fecha de turno id: " + i);
	// 		console.log(array.fechaTurno.toLocaleString());
	// 	}
	// 	array.forEach(turno => turno.fechaTurno.toLocaleString());
	// 	let hoy = new Date();
	// 	console.log(hoy.toLocaleString());
	// }

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
						</tr>
					</thead>
					<tbody>
						{this.state.arrTurnos.map((turno, i) => {
							return (
								<tr>
									<td>{turno.id}</td>
									<td>{turno.paciente.nombre} {turno.paciente.apellido}</td>
									<td>{turno.odontologo.nombre} {turno.odontologo.apellido}</td>
									<td>{turno.fechaTurno}</td>
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
