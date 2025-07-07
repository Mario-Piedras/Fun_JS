// Ejemplo de SweetAlert sin personalizar
function saludo(){
  swal('¡Hola mundo!');
}

// Ejemplo de SweetAlert personalizado
function saludoPersonalizado(){
  swal({
    title: '¡Qué tal, Mundo!',
    text: 'Bienvenidos al curso de funciones de JavaScript',
    icon: 'success',
    button: '¡Engine!'
  })
}