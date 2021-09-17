import React, { Component } from 'react';
import Consultas from '../components/Consultas';
import RegistrarOdontologo from '../components/RegistrarOdontologo';
import RegistrarPaciente from '../components/RegistrarPaciente'

class Administracion extends Component {
    
    render() {
        return (
            <div>
                <h1>Panel de Odontologos</h1>
                <RegistrarOdontologo />
                <hr/>
                <h2>Tabla de Odontologos</h2>
                <Consultas />
                <hr/>
                <h1>Panel de Pacientes</h1>
                <RegistrarPaciente />
                <hr/>
                <h1>Consultas generales</h1>
            </div>
        );
    }
}

export default Administracion;
