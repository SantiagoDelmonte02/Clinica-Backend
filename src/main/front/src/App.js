import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/RegistrarOdontologo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Consultas from "./components/Consultas";
import Administracion from "./pages/Administracion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch> 
        <Route exact path="/"><Home /></Route>
        <Route path="/registrar"><Register /></Route>
        <Route path="/consultas"><Consultas /></Route>
        <Route path="/administrador"><Administracion /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
