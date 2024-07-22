<?php include_once 'header.php'; ?>
<?php include_once 'menu.php'; ?>
<form id="frm_estudiantes" method="POST" enctype="multipart/form-data">
  <div class="row">
    <h2 class="text-center" id="titulo_formualrio">AGREGAR ESTUDIANTE</h2>
  </div>
  <div class="my-3 row d-flex justify-content-center">
    <div class="col-sm-6">
      <div class="mb-3">
        <label for="txtIdentificacion" class="fw-bold">Identificación:</label>
        <input type="number" name="txtIdentificacion" placeholder="Identificación del estudiante" id="txtIdentificacion" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="txtNombreC" class="fw-bold">Nombre Completo:</label>
        <input type="text" name="txtNombreC" pattern="[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]{1,80}" placeholder="Nombre completo del estudiante" id="txtNombreC" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="txtFechaNacimiento" class="fw-bold">Fecha de Nacimiento:</label>
        <input type="date" name="txtFechaNacimiento" id="txtFechaNacimiento" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="txtCiudadN" class="fw-bold">Ciudad Nacimiento:</label>
        <select name="txtCiudadN" id="txtCiudadN" class="form-control" required>
          <option value="">Seleccione una ciudad</option>
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
      <div class="mb-3">
        <label for="txtDepartamentoN" class="fw-bold">Departamento Nacimiento:</label>
        <select name="txtDepartamentoN" id="txtDepartamentoN" class="form-control" required>
          <option value="">Seleccione un departamento</option>
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
      <div class="mb-3">
        <label for="txtEdad" class="fw-bold">Edad:</label>
        <input type="number" name="txtEdad" placeholder="Edad del estudiante" id="txtEdad" min="1" class="form-control" required>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn" id="btn-Guardar" type="button">Agregar <i class="bi bi-plus-circle-fill" style="font-size: 1rem;"></i></button>
        <button type="button" class="btn btn" id="btn-Cancelar">Limpiar Campos <i class="bi bi-trash-fill" style="font-size: 1rem;"></i></button>
      </div>
      <br>
    </div>
  </div>
</form>
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
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="txtIdentificacionEditar" name="txtIdentificacionEditar" placeholder="Digite la identificación del estudiante">
                <label for="txtIdentificacionEditar">Identificación del estudiante</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="txtNombreEditar" name="txtNombreEditar" placeholder="Digite el nombre del estudiante">
                <label for="txtNombreEditar">Nombre del estudiante</label>
              </div>
              <div class="form-floating mb-3">
                <input type="date" class="form-control" id="txtFechaNacimientoEditar" name="txtFechaNacimientoEditar" placeholder="Digite la fecha de nacimiento">
                <label for="txtFechaNacimientoEditar">Fecha de Nacimiento</label>
              </div>
              <div class="form-floating mb-3">
                <select name="txtCiudadNEditar" id="txtCiudadNEditar" class="form-control" required>
                  <option value="">Seleccione una ciudad</option>
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
                <label for="txtCiudadNEditar">Ciudad Nacimiento</label>
              </div>
              <div class="form-floating mb-3">
                <select name="txtDepartamentoNEditar" id="txtDepartamentoNEditar" class="form-control" required>
                  <option value="">Seleccione un departamento</option>
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
                <label for="txtDepartamentoNEditar">Departamento Nacimiento</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="txtEdadEditar" name="txtEdadEditar" placeholder="Digite la edad del estudiante">
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
</div>

<?php include_once 'footer.php'; ?>
<script src="../assets/js/estudiantes_template.js"></script>
<script src="../assets/js/estudiantes_peticiones.js"></script>
<script src="../assets/js/estudiantes.js"></script>