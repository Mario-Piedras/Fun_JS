let control = 0;
let contraseña = "Santo_Sena";
document.writeln(control);
function verificar() {
  let clave = document.getElementById("clave").value;
  if (clave != contraseña || clave == "") {
    alert("Contraseña incorrecta o vacía. Inténtalo de nuevo.");
    control++; // Incrementa el contador de intentos
    console.log(control);
    if (control >= 3) {
      alert(
        "Has excedido el número de intentos permitidos, acceso denegado... contacte a soporte técnico."
      );
      return 0;
    }
  } else {
    if (control < 3) {
      window.open("https://www.google.com");
    } else {
      alert(
        "Acceso denegado. Has excedido el número de intentos permitidos, acceso denegado... contacte a soporte técnico."
      );
    }
  }
}
