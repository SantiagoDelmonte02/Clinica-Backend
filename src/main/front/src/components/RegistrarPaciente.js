import React, { Component } from 'react';
import './styles/Register.css'

class Register extends Component {

	handleRegistro = () => {

		let datos = {};
    datos.nombre = document.getElementById("nombrePaciente").value;
    datos.apellido = document.getElementById("apellidoPaciente").value;
    datos.dni = document.getElementById("dniPaciente").value;
    datos.fechaIngreso = new Date();

		fetch("/pacientes", {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify(datos)
		}).then(function(res){ 
				console.log(res) 
			})
			alert("Paciente agregado!")
	}

	render() {
		return (
			<div>
				<div class="login">
					<form>
						<h2>Registrar Paciente</h2>

						<input class="entrada" id="nombrePaciente" type="text" name="nombre" placeholder="Nombre" />
						<input class="entrada" id="apellidoPaciente" type="text" name="apellido" placeholder="Apellido" />
						<input class="entrada" id="dniPaciente" type="text" name="dni" placeholder="Dni" />
						{/* <input class="entrada" id="domicilio" type="date" name="domicilio" placeholder="Fecha ingreso" /> */}

						<input class="resetear" type="reset" value="Reiniciar" />
						<input onClick={this.handleRegistro} class="entrar" type="button" value="Registrar" />
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
