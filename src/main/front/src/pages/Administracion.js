import React, { Component } from 'react';
import ConsultaOdontologos from '../components/ConsultaOdontologos';
import ConsultaPacientes from '../components/ConsultaPacientes';
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
                <ConsultaOdontologos />
                <hr/>
                <h1>Panel de Pacientes</h1>
                <RegistrarPaciente />
                <hr/>
                <ConsultaPacientes />
            </div>
        );
    }
}

export default Administracion;
