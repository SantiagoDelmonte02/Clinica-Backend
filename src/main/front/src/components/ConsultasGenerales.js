import React from 'react'
import ConsultaOdontologos from './ConsultaOdontologos'
import ConsultaPacientes from './ConsultaPacientes'
import RegistrarTurno from './RegistrarTurno'

function ConsultasGenerales() {
	return (
		<div>
				<RegistrarTurno />
				<hr/>
        <ConsultaOdontologos />
				<hr/>
				<ConsultaPacientes />
				<hr/>
				<br/>
        <br/>
        <br/> 
		</div>
	)
}

export default ConsultasGenerales
