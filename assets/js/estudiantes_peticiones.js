// Objeto principal
  let est_pet = {};
// Formulario
  est_pet.formulario = $(`#frm_estudiantes`);
// Formulario edición
  est_pet.formulario_edicion = $(`#frm_estudiantes_editar`);
/**
 * Función encargada de obtener los datos de los estudiantes
 *
 * @return     Object  Datos de todos los estudiantes registrados
 */
async function listar_estudiantes() {
  const response = await $.ajax({
    url      : `../controller/estudiantes_controller.php`,
    type     : `POST`,
    data     : {action:`listar_estudiantes`},
    dataType : `json`
  });
  return response;
}
/**
 * Función encargada de eliminar los datos de un estudiante
 *
 * @param      number   id_Estudiante  Identificador del estudiante
 * @return     number  1 | 0 Correcto o Incorrecto
 */
async function borrar_estudiante(id_Estudiante) {
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
 * Función encargada de consultar la información de un estudiante
 *
 * @param      number   id_Estudiante  The identifier estudiante
 * @return     Object  Datos del estudiante
 */
async function consultar_estudiante(id_Estudiante) {
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
 * Función encargada de registrar los datos de un estudiante
 *
 * @return     number  1 | 0 Correcto o incorrecto
 */
async function guardar_estudiante() {
  const form     = est_pet.formulario.serialize();
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
 * Función encargada de actualizar los datos de un estudiante
 * @param      number   id_Estudiante  Identificador del estudiante
 *
 * @return     number  1 | 0 Correcto o incorrecto
 */
async function actualizar_estudiante(id_Estudiante) {
  const form     = est_pet.formulario_edicion.serialize();
  const params   = {action : `actualizar_estudiante`, formulario_edicion : form, id_estudiante : id_Estudiante};
  const response = await $.ajax({
    url      : `../controller/estudiantes_controller.php`,
    type     : `POST`,
    data     : params,
    dataType : `json`
  });
  return response;
}