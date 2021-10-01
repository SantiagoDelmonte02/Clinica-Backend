import React, { Component } from "react";
import { Redirect } from "react-router";

class Login extends Component {

  handleLogin = () => {
    let datos = {};
		datos.usuario = document.getElementById("usuario").value;
		datos.password = document.getElementById("password").value;

		fetch("/login", {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify(datos)
		})
    
    console.log(datos);
		document.getElementById("usuario").value = "";
		document.getElementById("password").value = "";

  }

  render () {
    return (
      <>
        {this.props.isLogged && this.props.isAdmin ? (
          <Redirect to="/administracion" />
        ) : (this.props.isLogged && !this.props.isAdmin) ? (
          <Redirect to="/turnos" />
        ) : (
          <div>
          <h1><i>Bienvenidos a la clinica Digital House</i></h1>
          <hr />
          <div class="login">
            <form>
              <h2>Iniciar sesion</h2>

              <input class="entrada" id="usuario" type="text" name="usuario" placeholder="Usuario" />
              <input class="entrada" id="password" type="password" name="password" placeholder="Contraseña" />

              <input class="resetear" type="reset" value="Reiniciar" />
              <input class="entrar" type="button" onClick={this.props.onLogin} value="Ingresar" />
              
              <p>¿Olvidaste tu contraseña? <a href="/login"> Recuperar contraseña</a></p>

            </form>
            
          </div>
          <hr />
        </div>
        )}
      </>  
    );
  }

  
}

export default Login;
