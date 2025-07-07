/* Condicionales

Funcionalidades que permiten mejorar la toma de decisiones en la ejecución del codigo.
Estas decisiones se basan en evaluar si una o más condiciones son verdaderas o falsas, es decir, si cumple algo en ciertas circunstancias, parametros o condiciones especificas.
Ahora bien, se puede verificar si se cumple una condición determinada tiene un resultado especifico, el programa se ejecutará dentro de las instrucciones dadas.
*/

//Condicinal if() else{}
//declarar las variables
let nombre, edad;
//un prompt para que el usuario ingrese los datos
nombre = prompt("ingresa tu nombre: ");
edad = prompt("ingrese tu edad: ");
//convierte el numero ingresado en edad en un entero
edad = parseInt(edad);
//condicional que debe complirse para decir que eres mayor
if (edad >= 18) {
    document.writeln("Tú eres mayor de edad");
    console.log("Edad digitada: ",edad,". Tú eres mayor de edad");
}else{ //si la condición de arriba no se cumple, entonces se dice que eres menor
    document.writeln("Tú eres menor de edad");
    console.log("Edad digitada: ",edad,". Tú eres menor de edad");
};