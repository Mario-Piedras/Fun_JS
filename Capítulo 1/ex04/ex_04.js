// Pedir datos a un usuaro (como ejercicio pues cuando se piden datos se utiliza inputs).

let nombre, edad, dirección, movil, email; //se puede crear tantas variables se necesiten con una declaración let.
// prompt es una palabra reservada que despliega una función que muestra un mensaje de tipo alert para pedir datos.

//digitar los datos de usuario
nombre = prompt("digite su nombre: ");
edad = prompt("digite su Edad: ");
dirección = prompt("digite su dirección: ");
movil = prompt("digite su movil: ");
email = prompt("digite su email: ");

//imprimir los datos del usuario en panatalla
document.writeln("Su nombre es: ", nombre, "<br>");
document.writeln("Su edad es: ", edad, "<br>");
document.writeln("Su dirección es: ", dirección, "<br>");
document.writeln("Su movil es: ", movil, "<br>");
document.writeln("Su email es: ", email);

console.log("Su nombre es: ", nombre, "Su edad es: ", edad, "Su dirección es: ", dirección,"Su movil es: ", movil,"Su email es: ", email);