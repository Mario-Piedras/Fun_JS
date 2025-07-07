// // Ejercicio de analiis: Pedir a un usuario que digite algún tipo de valor

// let a= 1;
// let suma= 0;
// let valor;

// while(a<=3){
//     valor = parseInt(prompt('Ingrese un valor númericos'));
//     suma = suma + valor;
//     a++
// }
// document.writeln('La suma es: ', suma, '<br>');

//Rifa
let num_ganador = Math.floor(Math.random()*(25)+1);
let numero;

do{
    numero = parseInt(prompt('¡Rifa!: número: dame números entre 1 y 25'));
    if(numero !=num_ganador){
        document.writeln('Usted dio el numero: ', numero, '<br>');
    }else{
        document.writeln('¡Genial! has ganado el número correcto era el ', numero, ' Reclama tu premio')
    }
}   while (numero !=num_ganador);