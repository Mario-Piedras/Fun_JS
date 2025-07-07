//Operadores matematicos

let a, b; //Aqui va dar un error, es normal
let c, d; //Aquí las operaciones va a dar el resultado real
let suma, resta, multiplicacion, divicion, residuo, potencia; //Variables para obtener los resultados de los operadores.



//Resutados de las operacones
suma = a+b; //se concatenaron los valores con el +
resta = a-b;
multiplicacion =a*b;
divicion = a/b;
residuo = a%b;
potencia=a**b;

// document.writeln(
//     "las suma es: ",suma,"<br>", 
//     "las resta es: ",resta,"<br>",
//     "las multiplicación es: ",multiplicacion,"<br>",
//     "las división es: ",divicion,"<br>",
//     "las residuo es: ",residuo,"<br>",
//     "las potencia es: ",potencia,"<br>"
// )

//Segunda operación
//Para que las operacones numericas se puedan dar correctamente, se debe covertir los datos ingresados con parseInt o parseFloat
c = parseInt(prompt("Ingrese un numero: "));
d = parseFloat(prompt("Ingrese un numero: "));

suma = c+d;
resta = c-d;
multiplicacion =c*d;
divicion = c/d;
residuo = c%d;
potencia= c**d;

document.writeln(
    "las suma es: ",suma,"<br>", 
    "las resta es: ",resta,"<br>",
    "las multiplicación es: ",multiplicacion,"<br>",
    "las división es: ",divicion,"<br>",
    "las residuo es: ",residuo,"<br>",
    "las potencia es: ",potencia,"<br>"
);

console.log(
    "las suma es: ",suma,
    "las resta es: ",resta,
    "las multiplicación es: ",multiplicacion,
    "las división es: ",divicion,
    "las residuo es: ",residuo,
    "las potencia es: ",potencia,
);

