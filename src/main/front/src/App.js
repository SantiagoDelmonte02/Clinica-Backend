import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Administracion from "./components/Administracion";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/registrar"><Register /></Route>
        <Route path="/administracion"><Administracion /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
