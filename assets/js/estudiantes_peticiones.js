/**
 * Clase encargada de realizar las peticiones ajax al modelo
 */
class estudiantes_peticiones {
  /**
   * Función encargada de realizar la petición para obtener los datos de todos los estudiantes
   *
   * @return     Object  Datos de los estudiantes
   */
  static async listarEstudiantes() {
    const response = await $.ajax({
      url      : `../controller/estudiantes_controller.php`,
      type     : `POST`,
      data     : {action :`listar_estudiantes`},
      dataType : `json`
    });
    return response;
  }
  /**
   * Función encargade de realizar la petición para borrar los datos de un estudiante
   *
   * @param      Number  id_Estudiante  Identificador del estudiante

   * @return     Number  Estado de la petición
   */
  static async borrarEstudiante(id_Estudiante) {
    const params   = {action : `borrar_estudiante`, id_estudiante : id_Estudiante};
    const response = await $.ajax({
      url      : `../controller/estudiantes_controller.php`,
      type     : `POST`,
      data     : params,
      dataType : `json`
    });
    return response;
  }
  /**
   * Función encargada de realizar la petición para obtener la información de un estudiante
   *
   * @param      Number  id_Estudiante  Identificador del estudiante

   * @return     Object  Datos del estudiante
   */
  static async consultarEstudiante(id_Estudiante) {
    const params   = {action : `consultar_estudiante`, id_estudiante : id_Estudiante};
    const response = await $.ajax({
      url      : `../controller/estudiantes_controller.php`,
      type     : `POST`,
      data     : params,
      dataType : `json`
    });
    return response;
  }
  /**
   * Función encargada de realizar la petición para agregar los datos de un estudiante
   *
   * @return     Number  Estado de la petición
   */
  static async guardarEstudiante() {
    const form     = $(`#frm_estudiantes`).serialize();
    const params   = {action : `guardar_estudiante`, formulario : form};
    const response = await $.ajax({
      url      : `../controller/estudiantes_controller.php`,
      type     : `POST`,
      data     : params,
      dataType : `json`
    });
    return response;
  }
  /**
   * Función encargada de realizar la petición para actualizar los datos de un estudiante
   *
   * @param      Number  id_Estudiante  Identificador del estudiante

   * @return     Number  Estado de la petición
   */
  static async actualizarEstudiante(id_Estudiante) {
    const form     = $(`#frm_estudiantes_editar`).serialize();
    const params   = {action : `actualizar_estudiante`, formulario_edicion : form, id_estudiante : id_Estudiante};
    const response = await $.ajax({
      url      : `../controller/estudiantes_controller.php`,
      type     : `POST`,
      data     : params,
      dataType : `json`
    });
    return response;
  }
}