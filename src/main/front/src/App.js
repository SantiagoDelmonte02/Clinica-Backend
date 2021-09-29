import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Administracion from "./pages/Administracion";
import ConsultasGenerales from "./components/ConsultasGenerales";
import Turnos from "./components/Turnos";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated : false
    }
  }

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch> 
          <Route exact path="/"><Home /></Route>
          <Route path="/administracion"><Administracion /></Route>
          <Route path="/consultas"><ConsultasGenerales /></Route>
          <Route path="/turnos"><Turnos /></Route>
          {/* <PrivateRoute
              path="/administracion"
              isAuthenticated={this.state.isAuthenticated}
              redirectTo="/login"
            >
              <Administracion />
            </PrivateRoute>
            <Route path="/login">
              <Login
                onLogin={this.handleLogin}
                isAuthenticated={this.state.isAuthenticated}
              />
            </Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
