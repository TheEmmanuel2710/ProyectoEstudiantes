/**
 * Función encargada de generar los td de la tabla donde se listarán los estudiantes
 * @param  {Object} estudiantes Objeto con los datos de los estudiantes
 * @return {String} Html generado
*/
async function template_estudiantes(estudiantes) {
  let html = ``;
  if (estudiantes && estudiantes.length > 0) {
    estudiantes.forEach((estudiante, index) => {
      html += `
        <tr>
          <td>${index + 1}</td>
          <td>${estudiante.Identificacion}</td>
          <td>${estudiante.Nombre_Completo}</td>
          <td>${estudiante.Fecha_Nacimiento}</td>
          <td>${estudiante.Nombre_Ciudad}</td>
          <td>${estudiante.Nombre_Departamento}</td>
          <td>${estudiante.Edad}</td>
          <td><a id="btn-Consultar" onclick="consultar_estudiante(${estudiante.id})" class='btn btn-dark' data-bs-toggle='modal' data-bs-target='#updateModal'><i class="fa fa-edit text-white" title="ver/editar" style="font-size: 1rem;"></i></a> <a id="btn-Confirmar-Eliminar" onclick="confirmar_eliminar_estudiante(${estudiante.id},'${estudiante.Nombre_Completo}')" class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#deleteModal'><i class="fa fa-trash" title="Eliminar" style="font-size: 1rem;"></i></a></td>
        </tr>
      `;
    });
    $(`#tbl-Estudiante`).html(html);
  }
  else
    $(`#tbl-Estudiante`).html(`<tr><td colspan="7">No se encontraron estudiantes.</td></tr>`);
}
