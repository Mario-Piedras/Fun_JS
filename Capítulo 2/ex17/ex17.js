// Ejercicio de Contador

let contador = 0;

function actualizarVista() {
  document.getElementById("valorContador").textContent = `Valor: ${contador}`;
}

function aumentar() {
  contador++;
  actualizarVista();
}

function disminuir() {
  contador--;
  actualizarVista();
}
