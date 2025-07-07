function focalizar(control){
  control.value = '';
  control.style.border = '';
  control.style.borderRadius = '8px';
}

function validarVacios(control){
  if (control.value ==''){
    control.style.border = '2px solid red';
    control.style.borderRadius = '8px';
    swal('Por favor, completa el campo antes de continuar.');
  }
}