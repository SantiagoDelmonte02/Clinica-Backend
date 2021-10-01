import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Administracion from "./pages/Administracion";
import ConsultasGenerales from "./components/ConsultasGenerales";
import Turnos from "./components/Turnos";
import NavbarAdmin from "./components/NavbarAdmin";
import Footer from "./components/Footer";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged : true,
      isAdmin : true
    }
  }


  handleLogin = () => {
    if (this.state.isLogged) {
      this.setState({ isLogged: false });
    } else {
      this.setState({ isLogged: true });
    }
  }

  handleUser = () => {
    if (this.state.isAdmin) {
      this.setState({ isAdmin: false });
    } else {
      this.setState({ isAdmin: true });
    }
  };

  handleNavbar = (logged, admin) => {
    if (logged && admin) {
      return <NavbarAdmin onLogout={this.handleLogin} />
    } else if (logged && !admin) {
      return <Navbar onLogout={this.handleLogin} />
    }
  }

  handleHome = (logged, admin) => {
    if (logged && admin) {
      return <Redirect to="/administracion"/>
    } else if (logged && !admin) {
      return <Redirect to="/turnos"/>
    } else {
      window.location.href = "/login"
    }
  }

  render () {
    return (
      <BrowserRouter>
        {this.handleNavbar(this.state.isLogged, this.state.isAdmin)}
        <Switch> 
          <Route exact path="/">
            {this.handleHome(this.state.isLogged, this.state.isAdmin)}
          </Route>
          <Route path="/administracion"><Administracion /></Route>
          <Route path="/consultas"><ConsultasGenerales /></Route>
          <Route path="/turnos"><Turnos /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
  
}

export default App;
