import React, { Component } from 'react';
import RegistrarOdontologo from '../components/RegistrarOdontologo';
import RegistrarPaciente from '../components/RegistrarPaciente'

class Administracion extends Component {
    
    render() {
        return (
            <div>
                <h1>Registracion de Odontologos</h1>
                <RegistrarOdontologo />
                <hr/>
                <h1>Registracion de Pacientes</h1>
                <RegistrarPaciente />
                <hr/>
                
            </div>
        );
    }
}

export default Administracion;
