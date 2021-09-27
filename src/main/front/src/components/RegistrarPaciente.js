import React, { Component } from 'react';
import './styles/Register.css'
import swal from 'sweetalert';

class Register extends Component {

	handleRegistro = () => {

		let datos = {};
		let domicilio = {};
		datos.nombre = document.getElementById("nombrePaciente").value;
		datos.apellido = document.getElementById("apellidoPaciente").value;
		datos.dni = document.getElementById("dniPaciente").value;
		datos.fechaIngreso = document.getElementById("fechaIngreso").value;
		datos.domicilio = domicilio;
		datos.domicilio.calle = document.getElementById("calle").value;
		datos.domicilio.numero = document.getElementById("numero").value;
		datos.domicilio.localidad = document.getElementById("localidad").value;
		datos.domicilio.provincia = document.getElementById("provincia").value;

		fetch("/pacientes", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(datos)
		})
		swal("Felicitaciones!", "El paciente ha sido agregado", "success");

		document.getElementById("nombrePaciente").value = "";
		document.getElementById("apellidoPaciente").value = "";
		document.getElementById("dniPaciente").value = "";
		document.getElementById("fechaIngreso").value = "";
		document.getElementById("calle").value = "";
		document.getElementById("numero").value = "";
		document.getElementById("localidad").value = "";
		document.getElementById("provincia").value = "";
	}

	render() {
		return (
			<div>
				<div class="login">
					<form>
						<h1>Registrar Paciente</h1>
						<h2><i>Datos del paciente</i></h2>

						{/* Inputs */}
						<input class="entrada" id="nombrePaciente" type="text" name="nombre" placeholder="Nombre" />
						<input class="entrada" id="apellidoPaciente" type="text" name="apellido" placeholder="Apellido" />
						<input class="entrada" id="dniPaciente" type="text" name="dni" placeholder="Dni" />
						<input class="entrada" id="fechaIngreso" type="date" name="fechaIngreso" placeholder="Fecha ingreso" />
						<h3 style={{ padding: "15px 5px" }}>Datos del domicilio</h3>
						<div style={{ margin: "auto", width: "625px", display: "flex" }}>
							<input class="entrada" id="calle" type="text" name="calle" placeholder="Calle" />
							<input class="entrada" id="numero" type="text" name="numero" placeholder="Numero" />
						</div>
						<div style={{ margin: "auto", width: "625px", display: "flex" }}>
							<input class="entrada" id="localidad" type="text" name="localidad" placeholder="Localidad" />
							<input class="entrada" id="provincia" type="text" name="provincia" placeholder="Provincia" />
						</div>


						{/* Botones */}
						<input class="resetear" type="reset" value="Reiniciar" />
						<input onClick={this.handleRegistro} class="entrar" type="button" value="Registrar" />
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
