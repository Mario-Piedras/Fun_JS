let area =document.getElementById('comentarios');
area.style.resize = 'none';

function comentar(){
  const comentario = document.getElementById('comentarios').value.trim();

  if (comentario.length === 0) {
    swal('Por favor, escribe un comentario antes de enviar.');
  } else if (comentario.length > 100) {
    swal('El comentario es demasiado largo. Por favor, escribe un comentario de 100 caracteres o menos.');
  }else{
    swal('Comentario enviado correctamente. Gracias por tu opinión.');
  }
}