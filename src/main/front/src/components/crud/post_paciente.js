import { cargarPacientes } from './get_pacientes';

async function registrar() {
    let datos = {};
    datos.nombre = document.getElementById("nombrePaciente").value;
    datos.apellido = document.getElementById("apellidoPaciente").value;
    datos.dni = document.getElementById("dniPaciente").value;
    datos.fechaIngreso = new Date();

    // datos.domicilio = document.getElementById("domicilio").value;
    console.log(datos);

  const request = await fetch('/pacientes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  cargarPacientes();
  const usuarios = await request.json();
  console.log(usuarios);
}

export { registrar }