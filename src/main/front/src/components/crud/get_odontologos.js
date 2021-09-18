
async function cargarOdontologos() {
    const request = await fetch("/odontologos", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  
    const odontologos = await request.json();
    console.log(odontologos);
  
    

    let listadoHtml = "";
    odontologos.forEach((odontologo) => {
      let botonEliminar = '<td><button onclick="eliminarOdontologo(' + odontologo.id + ')" class="btn btn-danger btn_delete" id="btnEliminar">x</button></td>'
      let user = `<tr>
                        <td>${odontologo.id}</td>
                        <td>${odontologo.nombre} </td>
                        <td>${odontologo.apellido}</td>
                        <td>${odontologo.matricula}</td>
                        ${botonEliminar}
                    </tr>`;
      listadoHtml += user;
      document.querySelector("#odontologos tbody").outerHTML = listadoHtml;
    });
}

function eliminarOdontologo(id) {

  // const request = await fetch('/odontologos/' + id, {
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   });

  console.log(id)
}

export { cargarOdontologos, eliminarOdontologo }
