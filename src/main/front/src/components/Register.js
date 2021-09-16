import React, { Component } from 'react';

class Register extends Component {

    render() {

        async function registrarUsuario() {
    
            let datos = {};
            datos.nombre = document.getElementById("nombre").value;
            datos.apellido = document.getElementById("apellido").value;
            datos.matricula = document.getElementById("matricula").value;

        
          const request = await fetch('/odontologos', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          });
        
          const usuarios = await request.json();
          console.log(usuarios);
        
          window.location.href = "administracion"
        }


        return (
            <div>
                <h3>Agregar odontologo</h3>
                <form id="add_new_odontologo">
                    <div>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre"
                            placeholder="Ingrese el nombre" name="nombre" required></input>
                    </div>
                    <div>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido"
                            placeholder="Ingrese la apellido" name="apellido" required></input>
                    </div>
                    <div>
                        <label for="matricula">Matricula:</label>
                        <input type="number" id="matricula"
                            placeholder="Ingrese matrícula" name="matricula"></input>
                    </div>
                <button type="submit" onClick={registrarUsuario} id="btn-add-new-odontologo">Cargar</button>
                </form>
                
            </div>
        );
    }
}

export default Register;
