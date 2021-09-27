import React from 'react'
import ConsultaOdontologos from './ConsultaOdontologos'
import ConsultaPacientes from './ConsultaPacientes'

function ConsultasGenerales() {
	return (
		<div>
        <ConsultaOdontologos />
				<hr/>
				<ConsultaPacientes />
				<hr/>
		</div>
	)
}

export default ConsultasGenerales
