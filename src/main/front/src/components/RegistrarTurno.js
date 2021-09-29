import React, { Component } from 'react';
import './styles/Register.css'
import swal from 'sweetalert';

class RegistrarTurno extends Component {

  constructor(props) {
    super(props);

    this.state = {
      arrOdontologos : [],
      arrPacientes : []
    }
  }

  cargarPacientes = () => {
    fetch("/pacientes")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrPacientes: data })
      console.log(data);
    })
    
  }

  cargarOdontologos = () => {
    fetch("/odontologos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrOdontologos: data })
      console.log(data);
    })
  }

  componentDidMount() {
    this.cargarOdontologos();
    this.cargarPacientes();
  }

  buscaId = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        return array[i]
      }
    }
  }

	handleRegistro = () => {

    let turno = {};
    let paciente = {};
    let odontologo = {};

    let paciente_id = document.getElementById("id_paciente").value;
    let odontologo_id = document.getElementById("id_odontologo").value;

    paciente = this.buscaId(this.state.arrPacientes, paciente_id);
    odontologo = this.buscaId(this.state.arrOdontologos, odontologo_id);

    console.log(paciente);
    console.log(odontologo);

    if (paciente == null || odontologo == null) {
      swal("Error!", "El id ingresado no corresponde a un paciente/odontologo", "error");
      return;
    } 

    turno.paciente = paciente;
    turno.odontologo = odontologo;
    turno.fechaTurno = document.getElementById("fechaTurno").value;

		fetch("/turnos", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(turno)
		})
    console.log(turno);
		swal("Felicitaciones!", "El turno fue registrado", "success");

    document.getElementById("id_paciente").value = "";
		document.getElementById("id_odontologo").value = "";
		document.getElementById("fechaTurno").value = "";

	}

	render() {
		return (
			<div>
				<div class="login">
					<form>
						<h1>Registrar Turno</h1>
						<h2><i>Datos del turno</i></h2>

						<input class="entrada" id="id_paciente" type="number" min="0" name="id_paciente" placeholder="ID_PACIENTE" />
						<input class="entrada" id="id_odontologo" type="number" min="0" name="id_odontologo" placeholder="ID_ODONTOLOGO" />
						<input class="entrada" id="fechaTurno" type="datetime-local" name="fechaTurno" />

						<input class="resetear" type="reset" value="Reiniciar" />
						<input onClick={this.handleRegistro} class="entrar" type="button" value="Registrar" />

					</form>
				</div>
			</div>
		);
	}
}

export default RegistrarTurno;
