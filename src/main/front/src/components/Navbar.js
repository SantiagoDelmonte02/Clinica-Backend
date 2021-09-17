import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
          <Link className="navbar-brand" to="/">Inicio</Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/consultas">Consultas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/administrador">Admin</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
