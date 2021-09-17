import React, { Component } from "react";
import Login from "../components/Login";
import Administracion from "./Administracion"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Home extends Component {

  constructor (props) {
    super(props);

    this.state = {
      auth: false
    };

  }

  verificaUsuario = () => {  
  
    let datosLogin = {};
    datosLogin.usuario = document.querySelector("#usuario").value;
    datosLogin.password = document.querySelector("#password").value;
    if (datosLogin.usuario === "admin" && datosLogin.password === "admin") {
      alert("Inicio de sesion correcto!")
      this.setState = { auth: true };
      console.log(this.state.auth);
    } else {
      alert("Inicio de sesion incorrecto!, vuelva a ingresar sus datos.")
      console.log(this.state.auth);
    }
  
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch> 
            <Route path="/"><Login handleClick={this.verificaUsuario} /></Route>
            { this.state.auth ? 
                <Route path="/login"><Login handleClick={this.verificaUsuario} /></Route>
              :   
                <Route path="/administrador"><Administracion /></Route>
            }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
