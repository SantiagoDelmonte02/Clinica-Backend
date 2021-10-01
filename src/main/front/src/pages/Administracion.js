import React, { Component } from 'react';
import RegistrarOdontologo from '../components/RegistrarOdontologo';
import RegistrarPaciente from '../components/RegistrarPaciente'

class Administracion extends Component {
    
    render() {
        return (
            <div>
                <h1>Bienvenido al panel de administrador</h1>
                <hr/>
                <RegistrarOdontologo />
                <hr/>
                <RegistrarPaciente />
                <hr/>
                <br/>
                <br/>
                <br/>             
            </div>
        );
    }
}

export default Administracion;
