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
      let user = `<tr>
                        <td>${odontologo.id}</td>
                        <td>${odontologo.nombre} </td>
                        <td>${odontologo.apellido}</td>
                        <td>${odontologo.matricula}</td>
                    </tr>`;
      listadoHtml += user;
      document.querySelector("#odontologos tbody").outerHTML = listadoHtml;
    });
}

export { cargarOdontologos }