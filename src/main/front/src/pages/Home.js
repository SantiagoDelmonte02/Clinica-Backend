import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenidos a la clinica Digital House</h1>
        <ul>
          <li>
            <Link to="/administracion">Administracion</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registrar">Registrar</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
