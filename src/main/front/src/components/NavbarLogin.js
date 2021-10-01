import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarLogin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/login">Inicio</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarLogin;
