<?php
  /**
   * Clase encargada de obtener la conexión a la base de datos
   */
  class Conexion {
    // Variables de conexión
      private $host     = 'localhost';
      private $user     = 'root';
      private $password = '';
      private $database = 'estudiantesU';
      private $con;
    /**
     * Constructor de la clase
     */
    public function __construct() {
      try {
        $this->con = new PDO("mysql:dbname=$this->database; host=$this->host", $this->user, $this->password);
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }
      catch (PDOException $e) {
        echo "Fallo en la conexión: {$e->getMessage()}";
      }
    }
    /**
     * Obtiene el valor de conexion
     */
    public function getCon() {
      return $this->con;
    }
  }
  //Objeto Conexion
    $conexion = new Conexion();
?>