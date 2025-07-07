//Funciones de tipo STRING
let palabra = "JavaScript";

document.writeln("La palabra es: ",palabra, "<br>");
console.log("La palabra es: ",palabra);
//Función que covierta la palabra en mayusculas
document.writeln("La palabra en mayusculas: ",palabra.toLocaleUpperCase(), "<br>");
//Función que covierta la palabra en minusculas
document.writeln("La palabra en miniscula: ",palabra.toLocaleLowerCase(), "<br>");

let textoUno, textoDos;

textoUno = "Curso de ";
textoDos = "fundamentos de JavaScript"

//función o maneras de concatenar dos o más strings diferentes
document.writeln(textoUno.concat(textoDos), "<br>");
document.writeln(textoUno+textoDos, "<br>");

//función que muestra la longitud de la palabra
document.writeln(palabra.length, "<br>");
document.writeln("La palabra escrita: ",palabra, "<br>");
console.log("La palabra escrita: ",palabra, "<br>");