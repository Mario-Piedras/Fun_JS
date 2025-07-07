function tiempoFinalizado(){
  swal('¡Se ha acabado el tiempo');
}

function cuentaRegresiva(){
  let elegirSegundos = document.getElementById("tiempoCronometro").value;
  let contador = document.getElementById("contador");
  let textoTiempo = document.getElementById("txtTiempo");
  let sonidoAlarma = document.getElementById('audioAlarma');

  textoTiempo.style.display = "blueviolet";
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
      document.getElementById("tiempoCronometro").value = '';
      sonidoAlarma.play();

      textoTiempo.textContent = '¡Tiempo Finalizado!';
      textoTiempo.style.color = 'blueviolet'

      setTimeout(() => alert('¡Se ha agotado el tiempo!'), 1000)
    }
  }
  actualizarContador(elegirSegundos);
}