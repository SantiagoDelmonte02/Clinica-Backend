import React, { Component } from 'react';
import './styles/Register.css'
import swal from 'sweetalert';

class Register extends Component {

	handleRegistro = () => {

		let datos = {};
		datos.nombre = document.getElementById("nombre").value;
		datos.apellido = document.getElementById("apellido").value;
		datos.matricula = document.getElementById("matricula").value;

		fetch("/odontologos", {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify(datos)
		}).then(function(res){ 
				console.log(res) 
			})
		swal("Felicitaciones!", "El odontologo ha sido agregado", "success");
		
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("matricula").value = "";
	}

	render() {

		return (
			<div>
				<div class="login">
					<form>
						<h2>Registrar Odontologo</h2>

						<input class="entrada" id="nombre" type="text" name="nombre" placeholder="Nombre" />
						<input class="entrada" id="apellido" type="text" name="apellido" placeholder="Apellido" />
						<input class="entrada" id="matricula" type="number" name="matricula" placeholder="Matricula" />

						<input class="resetear" type="reset" value="Reiniciar" />
						<input onClick={this.handleRegistro} class="entrar" type="button" value="Registrar" />

					</form>
				</div>

			</div>
		);
	}
}

export default Register;
