// Mostrar los números del 1 al 5
// se usa cuano sabemos cuántas queres repetir algo.
for (let numero = 1; numero <=5; numero++) {
    console.log("Número actual: ", numero);
}

//Mostrr los datos de una persona
// Se usa para recorrer las propiedades de un objeto.
let persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Bogotá"
};
//Para recorrer un obejto se usa el in
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Contar hasta 3 con un while
// Se usa cuando no sabemos cuántas veces, pero tenemos una condición que se evalua antes de entrar.

let contador = 1;
while (contador <=3) {
    console.log("contador: ", contador);
    contador++;
}

// Igual que while, pero siempre ejecuta al menos una vez.
// Mostrar el menú hasta que el ususario elija "Salir"
let opcion = "";

do {
    opcion =prompt("Escribe una opción (Escribe 'Salir' para terminar):");
    console.log("Elegiste: ", opcion);
}while (opcion != "Salir");

// Este se usa para recorrer valores de arreglos (no con objetos).
// Recorrer una lista d frutas.
let listaFrutas = ["manzana","banana","uva"];
//para recorrer un arreglo se usa el of
for (let fruta of listaFrutas){
    console.log("fruta: ",fruta);
}

// Ciclo de números pares
document.writeln('Ciclo de números pares <br>');

for (let x = 2; x <= 20; x+=2) {
    document.writeln(`Valor de x = ${x} <br>`);
    
}

let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese el usuaro: ');
clave = prompt('Ingrese su contraseña: ');

do {
    if(clave !='MiContraseña'){
        control = 0; //continuará valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema.
        clave = prompt('Contraseña incorrecta, intentelo de nuevo: ');
        
    } else {
        control = 1; //control valdra uno cuando la contraseña ingresada sea la correcta.
    }
}while (control != 1);
// La contraseña ingresada es verificada por control, si vale 1, le dará al sistema sino continuaá pidiendola hasta que se cumpla la condición o usted programe los intemtos.
document.writeln('¡Acceso concedido!, Bienvenido');