//Objeto principal
  let est = {};
// Datos Generales
  est.identificacion = $(`#txtIdentificacion`);
  est.nombre         = $(`#txtNombreC`);
  est.fecha_nace     = $(`#txtFechaNacimiento`);
  est.ciudad         = $(`#txtCiudadN`);
  est.departamento   = $(`#txtDepartamentoN`);
  est.edad           = $(`#txtEdad`);
// Datos Actualizar
  est.identificacion_editar = $(`#txtIdentificacionEditar`);
  est.nombre_editar         = $(`#txtNombreEditar`);
  est.fecha_nace_editar     = $(`#txtFechaNacimientoEditar`);
  est.ciudad_editar         = $(`#txtCiudadNEditar`);
  est.departamento_editar   = $(`#txtDepartamentoNEditar`);
  est.edad_editar           = $(`#txtEdadEditar`);
// Botones
  est.btn_guardar    = $(`#btn-Guardar`);
  est.btn_cancelar   = $(`#btn-Cancelar`);
  est.btn_actualizar = $(`#btn-Actualizar`);
// Eventos
  est.btn_guardar.click(async function() {
    await validar_campos();
  });
  est.btn_cancelar.click(async function() {
    await limpiar_formulario();
  });
  est.btn_actualizar.click(async function() {
    validar_campos_edicion();
  });
  inicializar_modulo_estudiantes(); //Inicia el módulo
// Inicio Funciones
  /**
   * Funcíón encargada de limpiar los elementos del formulario
   */
  async function limpiar_formulario() {
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
    const estudiantes = await listar_estudiantes();
    await template_estudiantes(estudiantes);
  }
  /**
   * Función encargada de validar los campos del formulario
   *
   * @return     Boolean  Bandera utilizada para detectar el estado de los campos
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
              icon: 'success',
              title: 'Éxito',
              text: 'Estudiante agregado de manera satisfactoria',
              confirmButtonText: 'Entendido'
            }).then(async (guardado) => {
                if (guardado.isConfirmed) {
                  await inicializar_modulo_estudiantes();
                  await limpiar_formulario();
                }
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
   * Función encargada de validar los campos del formulario
   *
   * @return     Boolean  Bandera utilizada para detectar el estado de los campos
   */
  async function validar_campos_edicion() {
    let camposValidos_editar = true;
    // Validar campos obligatorios
      if (est.identificacion_editar.val() === `` || est.nombre_editar.val() === `` || est.fecha_nace_editar.val() === `` || est.edad_editar.val() === `` || est.ciudad_editar.prop(`selectedIndex`) === 0 || est.departamento_editar.prop(`selectedIndex`) === 0)
        camposValidos_editar = false;
      // Mostrar Sweet Alert
        if (!camposValidos_editar) {
          Swal.fire({
            icon              : `info`,
            title             : `Revisar`,
            text              : `Por favor completa todos los campos obligatorios`,
            confirmButtonText : `Entendido`
          });
        }
        else if (camposValidos_editar) {
          let id_estudiante_guardado = localStorage.getItem(`id_estudiante`);
          actualizado = await actualizar_estudiante(id_estudiante_guardado);
          if (actualizado === 1) {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Estudiante actualizado de manera satisfactoria',
              confirmButtonText: 'Entendido'
            }).then(async (actualizado) => {
                if (actualizado.isConfirmed)
                  await inicializar_modulo_estudiantes();
              });
          }
          else {
            Swal.fire({
              icon              : `error`,
              title             : `Error`,
              text              : `Ha ocurrido un error al actualizar al estudiante`,
              confirmButtonText : `Entendido`
            });
          }
        }
      return camposValidos_editar;
  }
  /**
   * Función encargada de asignar los valores a todos los campo de la modal de edición
   *
   * @param      Object   datos   Datos del estudiante
   */
  async function asignar_valores(datos) {
    est.identificacion_editar.val(datos[0].Identificacion);
    est.nombre_editar.val(datos[0].Nombre_Completo)
    est.fecha_nace_editar.val(datos[0].Fecha_Nacimiento)
    est.ciudad_editar.val(datos[0].Ciudad_Nacimiento)
    est.departamento_editar.val(datos[0].Departamento_Nacimiento)
    est.edad_editar.val(datos[0].Edad)
  }