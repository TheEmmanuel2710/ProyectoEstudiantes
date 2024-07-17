/**
 * Clase general del módullo donde se realizan las funciones generales
 */
class estudiantes_module {
  /**
   * Constructor de la clase
   */
  constructor() {
    this.est = {
      identificacion        : $(`#txtIdentificacion`),
      nombre                : $(`#txtNombreC`),
      fecha_nace            : $(`#txtFechaNacimiento`),
      ciudad                : $(`#txtCiudadN`),
      departamento          : $(`#txtDepartamentoN`),
      edad                  : $(`#txtEdad`),
      identificacion_editar : $(`#txtIdentificacionEditar`),
      nombre_editar         : $(`#txtNombreEditar`),
      fecha_nace_editar     : $(`#txtFechaNacimientoEditar`),
      ciudad_editar         : $(`#txtCiudadNEditar`),
      departamento_editar   : $(`#txtDepartamentoNEditar`),
      edad_editar           : $(`#txtEdadEditar`),
      btn_guardar           : $(`#btn-Guardar`),
      btn_cancelar          : $(`#btn-Cancelar`),
      btn_actualizar        : $(`#btn-Actualizar`)
    };
    this.initEvents();
    this.inicializarModuloEstudiantes();
  }
  /**
   * Inicializa los eventos
   */
  initEvents() {
    this.est.btn_guardar.click(async () => {
      await this.validarCampos();
    });
    this.est.btn_cancelar.click(async () => {
      await this.limpiarFormulario();
    });
    this.est.btn_actualizar.click(async () => {
      await this.validarCamposEdicion();
    });
  }
  /**
   * Función encargada de limpiar los campos del formulario
   */
  async limpiarFormulario() {
    this.est.identificacion.val(``);
    this.est.nombre.val(``);
    this.est.fecha_nace.val(``);
    this.est.edad.val(``);
    this.est.ciudad.prop(`selectedIndex`, 0);
    this.est.departamento.prop(`selectedIndex`, 0);
  }
  /**
   * Función que inicializa el módulo
   */
  async inicializarModuloEstudiantes() {
    const estudiantes = await estudiantes_peticiones.listarEstudiantes();
    await estudiantes_template.template_estudiantes(estudiantes);
  }
  /**
   * Función encargada de validar los campos del formulario
   *
   * @return     Bool  Estado de los campos del formulario
   */
  async validarCampos() {
    let camposValidos = true;
    if (this.est.identificacion.val() === `` || this.est.nombre.val() === `` || this.est.fecha_nace.val() === `` || this.est.edad.val() === `` || this.est.ciudad.prop(`selectedIndex`) === 0 || this.est.departamento.prop(`selectedIndex`) === 0)
      camposValidos = false;
    if (!camposValidos) {
      Swal.fire({
        icon              : `info`,
        title             : `Revisar`,
        text              : `Por favor completa todos los campos obligatorios`,
        confirmButtonText : `Entendido`
      });
    }
    else {
      const guardado = await estudiantes_peticiones.guardarEstudiante();
      if (guardado === 1) {
        Swal.fire({
          icon              : `success`,
          title             : `Éxito`,
          text              : `Estudiante agregado de manera satisfactoria`,
          confirmButtonText : `Entendido`
        }).then(async (guardado) => {
          if (guardado.isConfirmed) {
            await this.inicializarModuloEstudiantes();
            await this.limpiarFormulario();
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
   * Función encargada de validar los campos de la modal
   *
   * @return     Bool  Estado de los campos de la modal
   */
  async validarCamposEdicion() {
    let camposValidos = true;
    if (this.est.identificacion_editar.val() === `` || this.est.nombre_editar.val() === `` || this.est.fecha_nace_editar.val() === `` || this.est.edad_editar.val() === `` || this.est.ciudad_editar.prop(`selectedIndex`) === 0 || this.est.departamento_editar.prop(`selectedIndex`) === 0)
      camposValidos = false;
    if (!camposValidos) {
      Swal.fire({
        icon              : `info`,
        title             : `Revisar`,
        text              : `Por favor completa todos los campos obligatorios`,
        confirmButtonText : `Entendido`
      });
    }
    else {
      let id_estudiante_guardado = localStorage.getItem(`id_estudiante`);
      const actualizado          = await estudiantes_peticiones.actualizarEstudiante(id_estudiante_guardado);
      if (actualizado === 1) {
        Swal.fire({
          icon              : `success`,
          title             : `Éxito`,
          text              : `Estudiante actualizado de manera satisfactoria`,
          confirmButtonText : `Entendido`
        }).then(async (actualizado) => {
          if (actualizado.isConfirmed)
            await this.inicializarModuloEstudiantes();
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
    return camposValidos;
  }
  /**
   * Función encargada de asignar los valores a los campos de la modal
   *
   * @param      Object   datos   Datos del estudiante
   */
  async asignarValores(datos) {
    this.est.identificacion_editar.val(datos[0].Identificacion);
    this.est.nombre_editar.val(datos[0].Nombre_Completo);
    this.est.fecha_nace_editar.val(datos[0].Fecha_Nacimiento);
    this.est.ciudad_editar.val(datos[0].Ciudad_Nacimiento);
    this.est.departamento_editar.val(datos[0].Departamento_Nacimiento);
    this.est.edad_editar.val(datos[0].Edad);
  }
}
// Instancia de la clase
  $(document).ready(() => {
    new estudiantes_module();
  });