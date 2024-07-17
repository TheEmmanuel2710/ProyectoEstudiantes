/**
 * Clase encargada de dibujar los datos de los estudiantes en una tabla
 */
class estudiantes_template {
  /**
   * Constructor de la clase
   */
  constructor() {
    this.initEvents();
  }
  /**
   * Función encargada de construir el template donde se visualizan los datos de todos los estudiantes
   *
   * @param      Object   estudiantes  Datos de los estudiantes
   */
  static async template_estudiantes(estudiantes) {
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
    }
    else
      $(`#tbl-Estudiante`).html(`<tr><td colspan="8" class="text-center">No se encontraron estudiantes.</td></tr>`);
  }
  /**
   * Inicia los eventos
   */
  initEvents() {
    // Evento para consultar la información de un estudiante
      $(document).on(`click`, `.btn-consultar`, async (event) => {
        const id_estudiante = $(event.currentTarget).data(`id`);
        localStorage.setItem('id_estudiante', id_estudiante);
        let datos = await estudiantes_peticiones.consultarEstudiante(id_estudiante);
        // Creacion del objeto de instacion de la clase requerida
          const estudiantes_module_instancia = new estudiantes_module();
          await estudiantes_module_instancia.asignarValores(datos);
      });
    // Evento para eliminar un estudiante
      $(document).on(`click`, `.btn-Eliminar`, async (event) => {
        const id_estudiante = $(event.currentTarget).data(`id`);
        if (id_estudiante) {
          let borrado = await estudiantes_peticiones.borrarEstudiante(id_estudiante);
          if (borrado === 1) {
            Swal.fire({
              icon              : `success`,
              title             : `Eliminado`,
              text              : `Estudiante eliminado correctamente`,
              confirmButtonText : `Entendido`
            }).then(async (borrado) => {
              if (borrado.isConfirmed) {
                const estudiantes_module_instancia = new estudiantes_module();
                await estudiantes_module_instancia.inicializarModuloEstudiantes();
                await estudiantes_module_instancia.limpiarFormulario();
              }
            });
          }
        }
      });
  }
}
// Instancia de la clase principal
  const estudiante_template = new estudiantes_template();