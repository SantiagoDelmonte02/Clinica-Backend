import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Administracion from "./pages/Administracion";
import ConsultasGenerales from "./components/ConsultasGenerales";
import Turnos from "./components/Turnos";
import NavbarAdmin from "./components/NavbarAdmin";
import Footer from "./components/Footer";
import NavbarLogin from "./components/NavbarLogin";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged : false,
      isAdmin : false
    }
  }

  handleLogin = () => {
    if (this.state.isLogged) {
      this.setState({ isLogged: false });
    } else {
      this.setState({ isLogged: true });
    }
    this.handleUser();
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
    } else {
      return <NavbarLogin />
    }
  }

  render () {
    return (
      <BrowserRouter>
        {this.handleNavbar(this.state.isLogged, this.state.isAdmin)}
        <Switch> 
          <Route exact path="/">
            {!this.state.isLogged && <Login isLogged={this.state.isLogged} onLogin={this.handleLogin} />}
          </Route>
          <Route path="/login"><Login isLogged={this.state.isLogged} onLogin={this.handleLogin} /></Route>
          <Route path="/administracion"><Administracion /></Route>
          <Route path="/consultas"><ConsultasGenerales /></Route>
          <Route path="/turnos"><Turnos /></Route>
          <PrivateRoute
              path="/administracion"
              isAuthenticated={this.state.isAdmin}
              redirectTo="/login"
            >
              <Administracion />
          </PrivateRoute>
          <PrivateRoute
              path="/turnos"
              isAuthenticated={!this.state.isAdmin}
              redirectTo="/login"
            >
              <Turnos />
          </PrivateRoute>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
  
}

export default App;
