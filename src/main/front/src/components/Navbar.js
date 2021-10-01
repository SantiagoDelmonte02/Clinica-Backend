import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">                      
                <li className="nav-item">
                    <Link className="nav-link" to="/turnos">Turnos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login"><button style={{position: "absolute", right: "1%"}} onClick={this.props.onLogout} class="btn btn-danger">Logout</button></Link>
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
