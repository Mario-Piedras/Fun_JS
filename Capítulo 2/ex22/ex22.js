// Ejemplo de SweetAlert sin personalizar
function seleccion(){
  if (document.getElementById('r1').checked) {
    swal('horario de 08:00 a.m hasta las 12:00 p.m');
  }

  if (document.getElementById('r2').checked) {
    swal('horario de 02:00 p.m hasta las 06:00 p.m');
  }

  if (document.getElementById('r3').checked) {
    swal('horario de 07:00 a.m hasta las 10:00 p.m');
  }
}