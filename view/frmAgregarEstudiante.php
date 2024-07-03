<?php include_once 'header.php'; ?>
<?php include_once 'menu.php'; ?>
<form id="frm_estudiantes" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
  <div class="row">
    <h2 class="text-center" id="titulo_formualrio">AGREGAR ESTUDIANTE</h2>
  </div>
  <div class="my-3 row d-flex justify-content-center">
    <div class="col-sm-6">
      <div class="mb-3">
        <label for="txtIdentificacion" class="fw-bold">Identificación:</label>
        <input type="number" name="txtIdentificacion" placeholder="Identificación del estudiante" id="txtIdentificacion" class="form-control" required>
        <div class="invalid-feedback">Por favor ingrese la Identificación</div>
      </div>
      <div class="mb-3">
        <label for="txtNombreC" class="fw-bold">Nombre Completo:</label>
        <input type="text" name="txtNombreC" pattern="[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]{1,80}" placeholder="Nombre completo del estudiante" id="txtNombreC"
          class="form-control" required>
          <div class="invalid-feedback">Por favor ingrese el nombre completo</div>
      </div>
      <div class="mb-3">
        <label for="txtFechaNacimiento" class="fw-bold">Fecha de Nacimiento:</label>
        <input type="date" name="txtFechaNacimiento" id="txtFechaNacimiento" class="form-control" required>
        <div class="invalid-feedback">Por favor ingrese la fecha de nacimiento</div>
      </div>
      <div class="mb-3">
        <label for="txtCiudadN" class="fw-bold">Ciudad Nacimiento:</label>
        <select name="txtCiudadN" id="txtCiudadN" class="form-control" required>
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
        <div class="invalid-feedback">Por favor seleccione una ciudad</div>
      </div>
      <div class="mb-3">
        <label for="txtDepartamentoN" class="fw-bold">Departamento Nacimiento:</label>
        <select name="txtDepartamentoN" id="txtDepartamentoN" class="form-control" required>
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
          <div class="invalid-feedback">Por favor ingrese el departamento natal</div>
      </div>
      <div class="mb-3">
        <label for="txtEdad" class="fw-bold">Edad:</label>
        <input type="number" name="txtEdad" placeholder="Edad del estudiante" id="txtEdad" min="1" class="form-control" required>
        <div class="invalid-feedback">Por favor ingrese la edad</div>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn" id="btn-Guardar" type="button">Agregar <i class="bi bi-plus-circle-fill" style="font-size: 1rem;"></i></button>
        <button type="button" class="btn btn" id="btn-Cancelar">Limpiar Campos <i class="bi bi-trash-fill" style="font-size: 1rem;"></i></button>
      </div>
      <br>
    </div>
  </div>
</form>
<?php include_once 'footer.php'; ?>
<script src="../assets/js/estudiantes.js"></script>
<script src="../assets/js/estudiantes_peticiones.js"></script>