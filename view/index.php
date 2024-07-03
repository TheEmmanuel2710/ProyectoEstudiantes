<?php include_once 'header.php'; ?>
<?php include_once 'menu.php'; ?>
<div class="row">
  <h1 class="text-center" id="titulo_bienvenido">BIENVENIDO</h1>
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../media/1.jpg" id="imagen1Carusel" alt="NO FOTO" class="d-block w-50">
      </div>
      <div class="carousel-item">
        <img src="../media/2.jpg" id="imagen2Carusel" alt="NO FOTO" class="d-block w-50">
      </div>
      <div class="carousel-item">
        <img src="../media/3.jpg" id="imagen3Carusel" alt="NO FOTO" class="d-block w-50">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>
<br>
<?php include_once 'footer.php'; ?>