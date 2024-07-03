//Objeto principal
let est            = {};
est.identificacion = $(`#txtIdentificacion`);
est.nombre         = $(`#txtNombreC`);
est.fecha_nace     = $(`#txtFechaNacimiento`);
est.ciudad         = $(`#txtCiudadN`);
est.departamento   = $(`#txtDepartamentoN`);
est.edad           = $(`#txtEdad`);
//Botones
  est.btn_guardar            = $(`#btn-Guardar`);
  est.btn_cancelar           = $(`#btn-Cancelar`);
  est.btn_actualizar         = $(`#btn-Actualizar`);
  est.btn_confirmar_eliminar = $(`#btn-Confirmar-Eliminar`);
  est.btn_consultar          = $(`#btn-Consultar`);
  est.btn_eliminar           = $(`#btn-Eliminar`);
  // Eventos
  est.btn_guardar.click(async function() {
    await validar_campos();
  });
  est.btn_cancelar.click(async function() {
    await limpiar_formulario();
  });
  est.btn_actualizar.click(async function() {
    await actualizar_estudiante();
  });
  est.btn_confirmar_eliminar.click(async function() {
    await confirmar_eliminar_estudiante();
  });
  est.btn_consultar.click(async function(){
    const id_estudiante = localStorage.getItem(`id`);
    await consultar_estudiante(id_estudiante);
  });
  est.btn_eliminar.click(async function(){
    const id_estudiante = localStorage.getItem(`id`);
    if (id_estudiante) {
      borrado = await borrar_estudiante(id_estudiante);
      if (borrado === 1) {
        Swal.fire({
          icon              : `success`,
          title             : `Eliminado`,
          text              : `Estudiante eliminado correctamente`,
          confirmButtonText : `Entendido`
        }).then(async function() {
          await inicializar_modulo_estudiantes();
        });
      }
    }
    else
      console.error(`No se ha encontrado un ID de estudiante en localStorage.`);
  });
  inicializar_modulo_estudiantes(); //Inicia el módulos
//Inicio Funciones
  async function limpiar_formulario() {
    // Limpia los campos de texto
      est.identificacion.val(``);
      est.nombre.val(``);
      est.fecha_nace.val(``);
      est.edad.val(``);
    // Limpia los campos select
      est.ciudad.prop(`selectedIndex`, 0);
      est.departamento.prop(`selectedIndex`, 0);
  }
  /**
   * Función que inicializa el módulo
   *
   */
  async function inicializar_modulo_estudiantes() {
    const estudiantes     = await listar_estudiantes();
    await template_estudiantes(estudiantes);
  }
  /**
   * Función que valida los campos del formulario
   */
  async function validar_campos() {
    let camposValidos = true;
    // Validar campos obligatorios
      if (est.identificacion.val() === `` || est.nombre.val() === `` || est.fecha_nace.val() === `` || est.edad.val() === `` || est.ciudad.prop(`selectedIndex`) === 0 || est.departamento.prop(`selectedIndex`) === 0)
        camposValidos = false;
      // Mostrar Sweet Alert   
        if (!camposValidos) {
          Swal.fire({
            icon              : `info`,
            title             : `Revisar`,
            text              : `Por favor completa todos los campos obligatorios`,
            confirmButtonText : `Entendido`
          });
        }
        else if (camposValidos) {
          guardado = await guardar_estudiante();
          if (guardado === 1) {
            Swal.fire({
              icon              : `success`,
              title             : `Exito`,
              text              : `Estudiante agregado de manera satisfactoria`,
              confirmButtonText : `Entendido`
            });
          }
          else {
            Swal.fire({
              icon              : `error`,
              title             : `Error`,
              text              : `Ha ocurrido un error al agregar al estudiante`,
              confirmButtonText : `Entendido`
            });
          }
        }
      return camposValidos;
  }
  /**
   * Confirmación de la información para eliminar un estudiante
   *
   * @param     Integer  id                 Identificador del estudiante
   * @param     String   nombre_estudiante  El nombre del estudiante
   */
  async function confirmar_eliminar_estudiante(id, nombre_estudiante) {
    document.getElementById(`mensajeEliminar`).innerHTML = `¿Seguro de eliminar al estudiante? ${nombre_estudiante}`;
    localStorage.id = id;
  }