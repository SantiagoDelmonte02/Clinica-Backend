import React from 'react'
import ConsultaOdontologos from './ConsultaOdontologos'
import ConsultaPacientes from './ConsultaPacientes'

function ConsultasGenerales() {
	return (
		<div>
				<h2>Tabla de Odontologos</h2>
        <ConsultaOdontologos />
				<hr/>
				<h2>Tabla de Pacientes</h2>
				<ConsultaPacientes />
				<hr/>
		</div>
	)
}

export default ConsultasGenerales
