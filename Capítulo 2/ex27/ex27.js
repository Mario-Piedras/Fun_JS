function comenzar(){
  setTimeout(cumplido, 5000);
}

function cumplido(){
  swal('¡Se acabó el tiempo');
}

function iniciar(){
  let elegirSegundos = document.getElementById('tiempoElegido').value;
  setTimeout(finalizado, 1000 * elegirSegundos);
}

function finalizado(){
  swal('¡Se ha acabado el tiempo');
}

function cuentaRegresiva(){
  let elegirSegundos = document.getElementById("tiempoCronometrado").value;
  let contador = document.getElementById("contador");
  let textoTiempo = document.getElementById("txtTiempo");

  textoTiempo.style.display = "none"; //No mostrar el texto de inicio.

  if (!elegirSegundos || elegirSegundos <=0){
    swal("Por favor, ingrese un tiempo valido");
    return;
  }

  //Cambiar texto indicado que el temporizador ha iniciado.
  textoTiempo.style.display = "block";
  textoTiempo.textContent = "¡Tiempo Iniciado!";
  textoTiempo.style.color = "green";

  //Iniciar la cuenta regresiva
  function actualizarContador(segundosRestantes){
    contador.textContent = segundosRestantes;

    if(segundosRestantes>0){
      setTimeout(() => actualizarContador(segundosRestantes -1), 1000);
    }else {
      textoTiempo.textContent = "¡Tiempo Finalizado!";
      textoTiempo.style.color = "blueviolet";
      swal("¡Se ha agotado el tiempo!");

      //Vaciar el campo de entrada
      document.getElementById("tiempoCronometrado").value ="";
    }
  }
  actualizarContador(elegirSegundos);
}