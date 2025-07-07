// // Funciones

// function  saludo(){
//     document.writeln('Hola mundo <br>');
//     console.log('Hola mundo =D');
// }

// saludo();

// function  despedida(){
//     document.writeln('Adios mundo :,( <br>');
//     console.log('allahuakbar');
// }

// despedida();

// function  saludarUsuario(nombreUsuario, apellidoUsuario){
//     document.writeln('Hola ', nombreUsuario, ' ',apellidoUsuario, ', Bievenido(a)');
// }

// let nombre = prompt('Dime tu nombre');
// let apellido = prompt('Dime tu apellido');

// saludarUsuario(nombre, apellido);

// Funciones con cálcuos simples

// function calcularAreaRectangulo(base, altura){
//     let area = base * altura;
//     return area;
// }

// console.log('El area del rectangulo es: ',area = calcularAreaRectangulo(5,10));

// function esMayor_o_esMenor(edad){
//     if(edad>=18){
//         console.log('Es mayor de edad')
//     }else{
//         console.log('Es menor de edad')
//     }
// }

// esMayor_o_esMenor(20);
// esMayor_o_esMenor(12);

function suma(){
    let a = parseInt(prompt('Ingrese el 1er número a sumar: '));
    let b = parseInt(prompt('Ingrese el 1er número a sumar: '));
    return a+b; // devuelv la suma con los números ingresados por el ususario
}
document.writeln('El resultado de la suma es: ',suma(), '<br>');

function verColor(){
    valor = parseInt(prompt('Por favor, ingrese valores entre 1 y 3 para activar el semáforo...'));

    switch(valor){
        case 1:
            return 'Perfecto has elegido el color: rojo';
        case 2:
            return 'Perfecto has elegido el color: Amarillo';
        case 3:
            return 'Perfecto has elegido el color: Verde';
        default:
            return 'No ha ingresado un número en la instrucción dada';
    }
}
document.writeln(verColor());
