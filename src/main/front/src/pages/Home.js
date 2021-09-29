import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/Login"

class Home extends Component {

  iniciarSesion() {
    <Redirect to="/login" />
  }

  render() {
    return (
      <div>
          {/* <h1>Home</h1>
          <h2>Desea iniciar sesion?</h2>
          <button onClick={this.iniciarSesion}>Continuar</button> */}
          <Login />
      </div>
    );
  }
}

export default Home;
