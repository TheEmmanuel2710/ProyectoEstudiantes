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
                        <form>
                            <label for="" class="">Edición de información del estudiante:</label><br>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="txtNombreEditar" placeholder="Digite el producto">
                                <label for="txtNombreEditar">Nombre Producto</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="txtPrecioEditar" placeholder="Digite el precio">
                                <label for="txtPrecioEditar">Precio Producto</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="txtCantidadEditar" placeholder="Digite el Cantidad">
                                <label for="txtCantidadEditar">Cantidad</label>
                            </div>
                            <div class="form-group row mt-2 ">
                                <div class="mb-3 col-lg-12">
                                    <label for="txtDescripcionEditar" class="fw-bold">Descripcion:</label>
                                    <textarea name="txtDescripcionEditar" id="txtDescripcionEditar" class="form-control" cols="30" rows="5"></textarea>
                                </div>
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