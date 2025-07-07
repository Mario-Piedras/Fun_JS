// Ejemplo de SweetAlert sin personalizar
function seleccion(){
  let cantidad = 0; //Esta cantidad se irá sumando a medida que escoja o se seleccione un lenguaje de programación.
  if (document.getElementById('check1').checked) {
    cantidad ++;
  }

  if (document.getElementById('check2').checked) {
    cantidad ++;
  }

  if (document.getElementById('check3').checked) {
    cantidad ++;
  }

  if (document.getElementById('check4').checked) {
    cantidad ++;
  }

  if (document.getElementById('check5').checked) {
    cantidad ++;
  }

  if (cantidad === 1) {
    swal(`Conoces ${cantidad} lenguaje de programación.`);
  }else{
    swal(`Conoces ${cantidad} lenguajes de programación.`);
  }
}
