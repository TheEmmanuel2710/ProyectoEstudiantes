// Objeto principal
  let est_pet = {};
// Formulario
  est_pet.formulario = $(`#frm_estudiantes`);
/**
 * Función que obtiene los datos de los estudiantes
 */
async function listar_estudiantes() {
  const response = await $.ajax({
    url      : `../controller/estudiantes_controller.php`,
    type     : `POST`,
    data     : {action:`listar_estudiantes`}, // Envía el parámetro `action` con el valor `listar_estudiantes`
    dataType : `json`
  });
  return response;
}
/**
 * Función que elimina un estudiante
 */
async function borrar_estudiante(id_Estudiante) {
  const params   = {action : `borrar_estudiante`, id_estudiante : id_Estudiante};
  const response = await $.ajax({
    url      : `../controller/estudiantes_controller.php`,
    type     : `POST`,
    data     : params, // Enviar el objeto params como datos de la solicitud
    dataType : `json`
  });
  return response;
}
async function consultar_estudiante(id_Estudiante) {
  const params   = {action : `consultar_estudiante`, id_estudiante : id_Estudiante};
  const response = await $.ajax({
    url      : `../controller/estudiantes_controller.php`,
    type     : `POST`,
    data     : params, // Enviar el objeto params como datos de la solicitud
    dataType : `json`
  });
  return response;
}
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