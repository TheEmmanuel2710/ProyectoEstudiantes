<?php
  class Conexion {
    //Variables de conexion
    private $host     = "localhost";
    private $user     = "root";
    private $password = "";
    private $database = "estudiantesU";
    private $con;
    //Gestiona la conexion con base de datos
    public function __construct() {
      try {
        $this->con=new PDO("mysql:dbname=$this->database; host=$this->host", $this->user, $this->password);
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch (PDOException $e) {
        $error = $e->getMessage();
        echo "Fallo en la conexión: $error";
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