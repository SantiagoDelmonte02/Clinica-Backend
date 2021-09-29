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
    fetch("/odontologos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ arrOdontologos: data })
    })
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

  mostrarEdicionOdontologo = (evt) => {
    let form = document.getElementById("id_form_" + evt.target.id);
    let thEditar = document.getElementById("th_editar");
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

  editarOdontologo = (evt) => {
    let datos = {};
		datos.nombre = document.getElementById("nombre_" + evt.target.id).value;
		datos.apellido = document.getElementById("apellido_" + evt.target.id).value;
		datos.matricula = document.getElementById("matricula_" + evt.target.id).value;
    console.log(datos);
    fetch("/odontologos/" + evt.target.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(datos)
    })
    alert("Odontologo con id: " + evt.target.id +" editado!")
    this.mostrarEdicionOdontologo(evt);
    this.cargarOdontologos();
  }

  render() {
    return (
      <div>
        <h2>Tabla de Odontologos</h2>
        <table class="table table-bordered" id="odontologos">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Matricula</th>
              <th scope="col">Acciones</th>
              <th id="th_editar" style={{display: "none"}} scope="col">Editar datos</th>
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
                    <td style={{width: "25%"}}>
                      <button id={odontologo.id} class="btn btn-danger" onClick={this.eliminarOdontologo}>Eliminar</button>     
                      <button id={odontologo.id} class="btn btn-info" onClick={this.mostrarEdicionOdontologo}>Editar</button>
                    </td>
                      <div id={"id_form_" + odontologo.id} class="form_update" style={{display: "none"}}>
                        <form>

                          <input style={{backgroundColor: "#989b9c"}} class="entrada" id="ID" type="text" name="ID" value={odontologo.id} readOnly/>
                          <input class="entrada" id={"nombre_" + odontologo.id} type="text" name="nombre" placeholder={odontologo.nombre} />
                          <input class="entrada" id={"apellido_" + odontologo.id} type="text" name="apellido" placeholder={odontologo.apellido} />
                          <input class="entrada" id={"matricula_" + odontologo.id} type="number" name="matricula" placeholder={odontologo.matricula} />

                          <input class="resetear" type="reset" value="Reiniciar" />
                          <input id={odontologo.id} onClick={this.editarOdontologo} class="entrar" type="button" value="Confirmar" />

                        </form>
                      </div>  
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
