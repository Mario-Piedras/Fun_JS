function pesta(){
  let pestan = open();
}

function ventana(){
  let ventana = open('','','width=400, height=250');
  ventana.document.writeln('Se abrió una ventana nueva');
}

function confirmar(){
  let respuesta = confirm('¿Desea salir del sitio?');
  if (respuesta == true) {
    window.close();
  } 
}

//Explicación:
/*
let ventana = open('','','width=400, height=250');

En este caso las comilla varias indican que no se está abriendo una URL específica, además, que debe desanclarse del navegador actual y crear una nueva ventana con las dimensiones especificadas (400x250 píxeles).
*/

//rediccionamiento
function redireccionar(){
  if (window.confirm('¿Desea salir de la pagina actual?')){
    window.location = 'https://github.com/';
  }
}

//Conteo y disponibilidad de caracteres
// es addEventListener es un metodo el cual se activa siempre que es usuario haga una acción. el 'keyup' es la acción de que el usuario typee en el teclado.
// por lo que se puede traducir en: cada vez que el ususario precione ingrese un caracter en el textarea con el id 'texto', ejecute la función caracteres.
document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
  let cant = document.getElementById('texto').value.length;
  let disponible = 20 - parseInt(cant);

  document.getElementById('cantidad').innerHTML = disponible;
  if (disponible==0){
    swal('¡Cantidad de caracteres excedida!', 'No se pueden ingresar más de 20 caracteres', 'error');
  }
}