import React from "react";
import { Redirect } from "react-router";

function Login(props) {
  return (
    <>
      {props.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div>
        <h1><i>Bienvenidos a la clinica Digital House</i></h1>
        <hr />
        <div class="login">
          <form>
            <h2>Iniciar sesion</h2>

            <input class="entrada" id="usuario" type="text" name="usuario" placeholder="Usuario" />
            <input class="entrada" id="password" type="password" name="password" placeholder="Contraseña" />

            <input class="entrar" type="button" onClick={props.onLogin} value="Ingresar" />

            <p>¿Olvidaste tu contraseña? <a href="/"> Recuperar contraseña</a></p>

          </form>
        </div>
      </div>
      )}
    </>
  );
}

export default Login;
