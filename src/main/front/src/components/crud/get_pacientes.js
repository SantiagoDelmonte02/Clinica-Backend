async function cargarPacientes() {
    const request = await fetch("/pacientes", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  
    const pacientes = await request.json();
    console.log(pacientes);

    let listadoHtml = "";
    pacientes.forEach((paciente) => {

      var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

      let user = `<tr>
                      <td>${paciente.id}</td>
                      <td>${paciente.nombre} </td>
                      <td>${paciente.apellido}</td>
                      <td>${paciente.dni}</td>
                      <td>${date}</td>
                      <td><button class="btn btn-danger" onclick="alert('Eliminado')">Eliminar</button> <button class="btn btn-info" onclick="alert('Editado')" >Editar</button></td>
                  </tr>`;
                  
      listadoHtml += user;
      document.querySelector("#pacientes tbody").outerHTML = listadoHtml;
    });
}

export { cargarPacientes }
