<?php
  namespace Modelo;
  use PDO;
  use PDOException;
  // Inclusión de la base de datos
    include_once 'conexion_model.class.php';
  // Creación de la clase
    class Estudiante {
      // Atributos de la clase
        private $id;
        private $identificacion;
        private $nombreCompleto;
        private $fechaNacimiento;
        private $ciudadNacimiento;
        private $departamentoNacimiento;
        private $edad;
      // Variable para almacenar el objeto de conexion
        public $con;
      /**
       * Gestiona la conexion a base de datos
       */
      public function __construct() {
        $this->con = new \Conexion();
      }
      /**
       * Gestiona la creación de un estudiante
       *
       * @return     string  Mensaje de éxito o error.
       */
       public function guardar_estudiante($formulario) {
        $this->identificacion         = $formulario['txtIdentificacion'];
        $this->nombreCompleto         = $formulario['txtNombreC'];
        $this->fechaNacimiento        = $formulario['txtFechaNacimiento'];
        $this->ciudadNacimiento       = $formulario['txtCiudadN'];
        $this->departamentoNacimiento = $formulario['txtDepartamentoN'];
        $this->edad                   = $formulario['txtEdad'];
        $sql = "INSERT INTO estudiante
                (
                  Identificacion,
                  Nombre_Completo,
                  Fecha_Nacimiento,
                  Ciudad_Nacimiento,
                  Departamento_Nacimiento,
                  Edad
                )
                VALUES
                (
                  :identificacion,
                  :nombreCompleto,
                  :fechaNacimiento,
                  :ciudadNacimiento,
                  :departamentoNacimiento,
                  :edad
                )";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->bindParam(':identificacion'        , $this->identificacion        , PDO::PARAM_INT);
        $stmt->bindParam(':nombreCompleto'        , $this->nombreCompleto        , PDO::PARAM_STR);
        $stmt->bindParam(':fechaNacimiento'       , $this->fechaNacimiento       , PDO::PARAM_STR);
        $stmt->bindParam(':ciudadNacimiento'      , $this->ciudadNacimiento      , PDO::PARAM_STR);
        $stmt->bindParam(':departamentoNacimiento', $this->departamentoNacimiento, PDO::PARAM_STR);
        $stmt->bindParam(':edad'                  , $this->edad                  , PDO::PARAM_INT);
        try {
          $stmt->execute();
          $mensaje = "Estudiante agregado";
          return 1;
        }
        catch (PDOException $e) {
          $mensaje = "Error al crear estudiante: {$e->getMessage()}";
          return 0;
        }
      }
      /**
       * Gestiona toda la información de los estudiantes
       *
       * @return     array|string  Datos de los estudiantes o mensaje de error.
       */
      public function consultar_estudiantes() {
        $sql = "SELECT
                  est.id,
                  est.Identificacion,
                  est.Nombre_Completo,
                  est.Fecha_Nacimiento,
                  est.Ciudad_Nacimiento,
                  est.Departamento_Nacimiento,
                  est.Edad,
                  dep.Nombre_Departamento,
                  ciu.Nombre_Ciudad
                FROM
                  estudiante              AS est
                  INNER JOIN ciudad       AS ciu ON(est.Ciudad_Nacimiento       = ciu.id)
                  INNER JOIN departamento AS dep ON(est.Departamento_Nacimiento = dep.id); ";
        $stmt = $this->con->getCon()->prepare($sql);
        $datos = [];
        try {
          $stmt->execute();
          while ($rows = $stmt->fetchAll(PDO::FETCH_ASSOC))
            $datos = $rows;
          $stmt = null;
        }
        catch (PDOException $e) {
          $mensaje = "Error al consultar estudiantes: {$e->getMessage()}";
          return $mensaje;
        }
        return $datos;
      }
      /**
       * Gestiona toda la información de un estudiante en específico.
       *
       * @param  int    $id        Identificador del estudiante.
       *
       * @return array|string  Datos del estudiante o mensaje de error.
       */
      public function consultar_estudiante($id) {
        $sql = "SELECT
                  id,
                  Identificacion,
                  Nombre_Completo,
                  Fecha_Nacimiento,
                  Ciudad_Nacimiento,
                  Departamento_Nacimiento,
                  Edad
                FROM
                  estudiante
                WHERE
                  id = :id";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->bindParam(":id", $id);
        $datos = [];
        try {
          $stmt->execute();
          while ($rows = $stmt->fetchAll(PDO::FETCH_ASSOC))
            $datos = $rows;
          $stmt = null;
        }
        catch (PDOException $e) {
          $mensaje = "Error al consultar estudiante: {$e->getMessage()}";
          return $mensaje;
        }
        return $datos;
      }
      /**
       * Gestiona la actualización de los datos de un estudiante en específico
       *
       * @return     string  Mensaje de éxito o error.
       */
      public function editar_estudiante($formulario_edicion, $id_estudiante) {
        $this->identificacion         = $formulario_edicion['txtIdentificacionEditar'];
        $this->nombreCompleto         = $formulario_edicion['txtNombreEditar'];
        $this->fechaNacimiento        = $formulario_edicion['txtFechaNacimientoEditar'];
        $this->ciudadNacimiento       = $formulario_edicion['txtCiudadNEditar'];
        $this->departamentoNacimiento = $formulario_edicion['txtDepartamentoNEditar'];
        $this->edad                   = $formulario_edicion['txtEdadEditar'];
        $sql = "UPDATE
                  estudiante
                SET
                  Identificacion          = :identificacion,
                  Nombre_Completo         = :nombreCompleto,
                  Fecha_Nacimiento        = :fechaNacimiento,
                  Ciudad_Nacimiento       = :ciudadNacimiento,
                  Departamento_Nacimiento = :departamentoNacimiento,
                  Edad                    = :edad
                WHERE
                  id = :id";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->bindParam(':identificacion'        , $this->identificacion        , PDO::PARAM_INT);
        $stmt->bindParam(':nombreCompleto'        , $this->nombreCompleto        , PDO::PARAM_STR);
        $stmt->bindParam(':fechaNacimiento'       , $this->fechaNacimiento       , PDO::PARAM_STR);
        $stmt->bindParam(':ciudadNacimiento'      , $this->ciudadNacimiento      , PDO::PARAM_STR);
        $stmt->bindParam(':departamentoNacimiento', $this->departamentoNacimiento, PDO::PARAM_STR);
        $stmt->bindParam(':edad'                  , $this->edad                  , PDO::PARAM_INT);
        $stmt->bindParam(':id'                    , $id_estudiante               , PDO::PARAM_INT);
        try {
          $stmt->execute();
          $mensaje = 'Estudiante actualizado';
          return 1;
        }
        catch (PDOException $e) {
          $mensaje = "Error al actualizar el estudiante: {$e->getMessage()}";
          return 0;
        }
      }
      /**
       * Gestiona la eliminación de los datos de un estudiante en específico
       *
       * @return     string  Mensaje de éxito o error
       */
      public function borrar_estudiante($id) {
        $sql = "DELETE
                FROM
                  estudiante
                WHERE
                  id = :id";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        try {
          $stmt->execute();
          $mensaje = "Estudiante eliminado";
          return 1;
        }
        catch (PDOException $e) {
          $mensaje = "Error al eliminar el estudiante: {$e->getMessage()}";
          return 0;
        }
        return $stmt;
      }
      /**
       * Gestiona las ciudades registradas
       *
       * @return     array  Lista de ciudades.
       */
      public function obtenerCiudades() {
        $sql = "SELECT
                  id,
                  Nombre_Ciudad
                FROM
                  ciudad";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->execute();
       return $stmt->fetchAll(PDO::FETCH_ASSOC);
      }
      /**
       * Gestiona los departamentos registrados
       *
       * @return     array  Lista de departamentos.
       */
      public function obtenerDepartamentos() {
        $sql = "SELECT
                  id,
                  Nombre_Departamento
                FROM
                  departamento";
        $stmt = $this->con->getCon()->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
      }
    }
?>