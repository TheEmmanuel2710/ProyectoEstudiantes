<?php include_once 'header.php'; ?>
<?php include_once 'menu.php'; ?>
<div class="row">
  <h2 class="text-center" id="titulo_tabla">DATOS ESTUDIANTES</h2>
  <div class="w-75 table-responsive" id="div_tabla">
    <table class="table table-bordered" id="tblEstudiantes">
      <thead>
        <tr id="tr_tabla">
          <th scope="col">#</th>
          <th scope="col">Identificación</th>
          <th scope="col">Nombre Completo</th>
          <th scope="col">Fecha De Nacimiento</th>
          <th scope="col">Ciudad de Nacimiento</th>
          <th scope="col">Departamento de Nacimiento</th>
          <th scope="col">Edad</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody id="tbl-Estudiante">

      </tbody>
    </table>
  </div>
  <div>
    <!-- Modal Editar -->
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateModalLabel">Editar Estudiante</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="frm_estudiantes_editar" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
                            <label for="" class="">Edición de información del estudiante:</label><br>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="txtIndentificacionEditar" placeholder="Digite la identificación del estudiante">
                                <label for="txtIndentificacionEditar">Identificación del estudiante</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="txtNombreEditar" placeholder="Digite el nombre del estudiante">
                                <label for="txtNombreEditar">Nombre del estudiante</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="txtFechaNacimientoEditar" placeholder="Digite la fecha de nacimiento">
                                <label for="txtFechaNacimientoEditar">Fecha de Nacimiento</label>
                            </div>
                            <div class="form-floating mb-3">
                                    <label for="txtCiudadNEditar">Ciudad Nacimiento:</label>
                                    <select name="txtCiudadNEditar" id="txtCiudadNEditar" class="form-control" required>
                                        <option value="" disabled selected>Seleccione una ciudad</option>
                                        <?php
                                          //Inclución del modelo
                                            include_once '../model/estudiante_model.class.php';
                                          //Instancia de la clase
                                            $estudiante = new Modelo\Estudiante();
                                            $ciudades   = $estudiante->obtenerCiudades();
                                            foreach ($ciudades as $ciudad)
                                              echo "<option value='{$ciudad['id']}'>{$ciudad['Nombre_Ciudad']}</option>";
                                        ?>
                                    </select>
                            </div>
                            <div class="form-floating mb-3">
                              <label for="txtDepartamentoNEditar">Departamento Nacimiento:</label>
                              <select name="txtDepartamentoNEditar" id="txtDepartamentoNEditar" class="form-control" required>
                                 <option value="" disabled selected>Seleccione un departamento</option>
                                 <?php
                                     //Inclución del modelo
                                       include_once '../model/estudiante_model.class.php';
                                     //Instancia de la clase
                                       $estudiante = new Modelo\Estudiante();
                                       $ciudades   = $estudiante->obtenerDepartamentos();
                                       foreach ($ciudades as $ciudad)
                                         echo "<option value='{$ciudad['id']}'>{$ciudad['Nombre_Departamento']}</option>";
                                 ?>
                              </select>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="txtEdadEditar" placeholder="Digite el nombre del estudiante">
                                <label for="txtEdadEditar">Edad</label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" id="btn-Actualizar" class="btn btn-primary">Editar</button>
                    </div>
                </div>
          </div>
        </div>
    </div>
    <div>
      <!-- Modal Eliminar-->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="daleteModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="deleteModalLabel">Eliminar Estudiante</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h3 id="mensajeEliminar"></h3>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button  type="button" id="btn-Eliminar" class="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
<script>
  (() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
</script>
<?php include_once 'footer.php'; ?>
<script src="../assets/js/estudiantes_template.js"></script>
<script src="../assets/js/estudiantes_peticiones.js"></script>
<script src="../assets/js/estudiantes.js"></script>