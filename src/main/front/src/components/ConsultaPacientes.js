import React, { Component } from "react";
import "./styles/Consultas.css";

class ConsultaPacientes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrPacientes : [],
      arrDomicilios : []
    }
  }

  cargarPacientes = () => {
    fetch("/pacientes")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrPacientes: data })
    })
  }

  cargarDomicilios = () => {
    fetch("/domicilios")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrDomicilios: data })
    })
  }

  componentDidMount() {
    this.cargarPacientes();
    this.cargarDomicilios();
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
      this.cargarDomicilios();
    } else {
      alert("Operacion cancelada!")
    }
  }

  mostrarEdicionPaciente = (evt) => {
    let form = document.getElementById("id_form_editar_paciente_" + evt.target.id);
    let thEditar = document.getElementById("th_editar_paciente_");
    console.log("Voy a editar al id: " + evt.target.id);
    if (form.style.display === "none") {
      form.style.display = "block";
      thEditar.style.display = "block";
    } else {
      form.style.display = "none";
      thEditar.style.display = "none";
    }
    console.log("Muestro o escondo el form con id: " + evt.target.id);
  }

  editarPaciente = (evt) => {

    let datos = {};
		let domicilio = {};

    datos.id = evt.target.id;
		datos.nombre = document.getElementById("nombre_paciente_" + evt.target.id).value;
		datos.apellido = document.getElementById("apellido_paciente_" + evt.target.id).value;
		datos.dni = document.getElementById("dni_" + evt.target.id).value;
    datos.fechaIngreso = document.getElementById("fechaIngreso_" + evt.target.id).value;
    datos.domicilio = domicilio;
    datos.domicilio.id = evt.target.id;
		datos.domicilio.calle = document.getElementById("calle_" + evt.target.id).value;
		datos.domicilio.numero = document.getElementById("numero_" + evt.target.id).value;
		datos.domicilio.localidad = document.getElementById("localidad_" + evt.target.id).value;
		datos.domicilio.provincia = document.getElementById("provincia_" + evt.target.id).value;

    console.log(datos);
    fetch("/pacientes/" + evt.target.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(datos)
    })
    alert("Paciente con id: " + evt.target.id +" editado!")
    this.mostrarEdicionPaciente(evt);
    this.cargarPacientes();
    this.cargarDomicilios();
  }

  render() {

    return (
      <div>

        {/* Tabla de pacientes */}
        <div>
        <h2>Tabla de Pacientes</h2>
        <table class="table table-bordered" id="pacientes">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">DNI</th>
              <th scope="col">Domicilio_ID</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Acciones</th>
              <th id="th_editar_paciente_" style={{display: "none"}} scope="col">Editar datos</th>
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
                    <td>{paciente.domicilio.id}</td>
                    <td>{paciente.fechaIngreso}</td>
                    <td style={{width: "25%"}}>
                      <button id={paciente.id} class="btn btn-danger" onClick={this.eliminarPaciente}>Eliminar</button> 
                      <button id={paciente.id} class="btn btn-info" onClick={this.mostrarEdicionPaciente}>Editar</button>
                    </td>
                    <div id={"id_form_editar_paciente_" + paciente.id} class="form_update" style={{display: "none"}}>
                        <form>

                          <input style={{backgroundColor: "#989b9c"}} class="entrada" id="ID" type="text" name="ID" value={paciente.id} readOnly/>
                          <input class="entrada" id={"nombre_paciente_" + paciente.id} type="text" name="nombre" placeholder={paciente.nombre} />
                          <input class="entrada" id={"apellido_paciente_" + paciente.id} type="text" name="apellido" placeholder={paciente.apellido} />
                          <input class="entrada" id={"dni_" + paciente.id} type="number" name="matricula" placeholder={paciente.dni} />
                          <input class="entrada" id={"fechaIngreso_" + paciente.id} type="date" name="fechaIngreso" placeholder={paciente.fechaIngreso} />
                          <input class="entrada" id={"calle_" + paciente.id} type="text" name="calle" placeholder={paciente.domicilio.calle} />
                          <input class="entrada" id={"numero_" + paciente.id} type="text" name="numero" placeholder={paciente.domicilio.numero} />
                          <input class="entrada" id={"localidad_" + paciente.id} type="text" name="localidad" placeholder={paciente.domicilio.localidad} />
                          <input class="entrada" id={"provincia_" + paciente.id} type="text" name="provincia" placeholder={paciente.domicilio.provincia} />


                          <input class="resetear" type="reset" value="Reiniciar" />
                          <input id={paciente.id} onClick={this.editarPaciente} class="entrar" type="button" value="Confirmar" />

                        </form>
                      </div>  
                </tr>
                )
              })}
          </tbody>
        </table>
        </div>
        

        {/* Tabla de domicilios */}
        
        <div>
        <h2>Tabla de Domicilios</h2>
        <table class="table table-bordered" id="domicilios">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Calle</th>
              <th scope="col">Numero</th>
              <th scope="col">Localidad</th>
              <th scope="col">Provincia</th>
            </tr>
          </thead>
          <tbody>
              {this.state.arrDomicilios.map((domicilio, i) => {
                return (
                  <tr>
                    <td>{domicilio.id}</td>
                    <td>{domicilio.calle} </td>
                    <td>{domicilio.numero}</td>
                    <td>{domicilio.localidad}</td>
                    <td>{domicilio.provincia}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        </div>
        
      </div>
    );
  }
}

export default ConsultaPacientes;
