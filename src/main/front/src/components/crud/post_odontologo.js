async function registrar() {
    let datos = {};
    datos.nombre = document.getElementById("nombre").value;
    datos.apellido = document.getElementById("apellido").value;
    datos.matricula = document.getElementById("matricula").value;

  const request = await fetch('/odontologos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const usuarios = await request.json();
  console.log(usuarios);
}

export { registrar }