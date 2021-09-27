import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/RegistrarOdontologo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Administracion from "./pages/Administracion";
import ConsultasGenerales from "./components/ConsultasGenerales";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch> 
        <Route exact path="/"><Home /></Route>
        <Route path="/registrar"><Register /></Route>
        <Route path="/administrador"><Administracion /></Route>
        <Route path="/consultas"><ConsultasGenerales /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
