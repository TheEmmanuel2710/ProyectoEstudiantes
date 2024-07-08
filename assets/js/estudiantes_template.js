/**
 * Función encargada de construir el template donde se visualizan los datos de todos los estudiantes
 *
 * @param      Object   estudiantes  Datos de los estudiantes
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
          <td>
            <a class="btn-consultar btn btn-dark" data-id="${estudiante.id}" data-bs-toggle='modal' data-bs-target='#updateModal'><i class="fa fa-edit text-white" title="ver/editar" style="font-size: 1rem;"></i></a>
            <a class="btn-Eliminar btn btn-danger" data-id="${estudiante.id}"><i class="fa fa-trash" title="Eliminar" style="font-size: 1rem;"></i></a>
          </td>
        </tr>
      `;
    });
    $(`#tbl-Estudiante`).html(html);
  } else {
    $(`#tbl-Estudiante`).html(`<tr><td colspan="7">No se encontraron estudiantes.</td></tr>`);
  }
}

// Delegar eventos a los botones generados dinámicamente
  $(document).on(`click`, `.btn-consultar`, async function() {
    const id_estudiante = $(this).data(`id`);
    localStorage.setItem('id_estudiante', id_estudiante);
    let datos = await consultar_estudiante(id_estudiante);
    await asignar_valores(datos);
  });
  $(document).on(`click`, `.btn-Eliminar`, async function() {
    const id_estudiante = $(this).data(`id`);
    if (id_estudiante) {
      borrado = await borrar_estudiante(id_estudiante);
      if (borrado === 1) {
        Swal.fire({
          icon              : `success`,
          title             : `Eliminado`,
          text              : `Estudiante eliminado correctamente`,
          confirmButtonText : `Entendido`
        }).then(async (borrado) => {
            if (borrado.isConfirmed) {
              await inicializar_modulo_estudiantes();
              await limpiar_formulario();
            }
          });
      }
    }
  });
