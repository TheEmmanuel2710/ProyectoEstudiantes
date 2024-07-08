<?php
  include_once '../model/estudiante_model.class.php';
  $estudiante_model = new Modelo\Estudiante();
  switch ($_POST['action']) {
    case 'listar_estudiantes':
      echo json_encode($estudiante_model->consultar_estudiantes());
    break;
    case 'borrar_estudiante':
     echo json_encode($estudiante_model->borrar_estudiante($_POST['id_estudiante']));
    break;
    case 'consultar_estudiante':
     echo json_encode($estudiante_model->consultar_estudiante($_POST['id_estudiante']));
    break;
    case 'guardar_estudiante':
      parse_str($_POST['formulario'], $formulario);
      echo json_encode($estudiante_model->guardar_estudiante($formulario));
    break;
    case 'actualizar_estudiante':
      parse_str($_POST['formulario_edicion'], $formulario_edicion);
      echo json_encode($estudiante_model->editar_estudiante($formulario_edicion, $_POST['id_estudiante']));
    break;
  }
?>
