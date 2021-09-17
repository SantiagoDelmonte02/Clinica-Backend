import React, { Component } from 'react';
import './styles/Register.css'

class Register extends Component {

    render() {
        async function registrarUsuario() {
            let datos = {};
            datos.nombre = document.getElementById("nombre").value;
            datos.apellido = document.getElementById("apellido").value;
            datos.matricula = document.getElementById("matricula").value;

          const request = await fetch('/pacientes', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          });
        
          const usuarios = await request.json();
          console.log(usuarios);
        
        }

        return (
            <div>
                
                <div class="login">
                    <form>
                        <h2>Registrar Paciente</h2>
                
                        <input class="entrada" id="nombre" type="text" name="nombre" placeholder="Nombre"/>
                        <input class="entrada" id="apellido" type="text" name="apellido" placeholder="Apellido"/>

                        <input class="resetear" type="reset" value="Reiniciar"/>
                        <input onClick={registrarUsuario} class="entrar" type="submit" value="Registrar"/>
                         
    
                    </form>
                </div>


            </div>
        );
    }
}

export default Register;
