import React, { Component } from 'react';
import { registrar } from './crud/post_paciente';
import './styles/Register.css'

class Register extends Component {

	render() {

		return (
			<div>

				<div class="login">
					<form>
						<h2>Registrar Paciente</h2>

						<input class="entrada" id="nombrePaciente" type="text" name="nombre" placeholder="Nombre" />
						<input class="entrada" id="apellidoPaciente" type="text" name="apellido" placeholder="Apellido" />
						<input class="entrada" id="dniPaciente" type="text" name="dni" placeholder="Dni" />
						{/* <input class="entrada" id="fechaIngreso" type="date" name="fechaIngreso" placeholder="Fecha ingreso" />
						<input class="entrada" id="domicilio" type="date" name="domicilio" placeholder="Fecha ingreso" /> */}

						<input class="resetear" type="reset" value="Reiniciar" />
						<input onClick={registrar} class="entrar" type="button" value="Registrar" />


					</form>
				</div>


			</div>
		);
	}
}

export default Register;
