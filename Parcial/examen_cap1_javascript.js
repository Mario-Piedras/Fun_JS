/*
================================================================================
                    EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT
                                CAPÍTULO 1
================================================================================

INSTRUCCIONES:
- Lea cuidadosamente cada ejercicio
- Complete el código donde se indique con "// TU CÓDIGO AQUÍ"
- Cada ejercicio tiene un valor de puntos específico
- Total del examen: 120 puntos
- Tiempo estimado: 90 minutos

================================================================================
*/

console.log("=== INICIANDO EXAMEN DE JAVASCRIPT - CAPÍTULO 1 ===");
document.writeln("<h1>EXAMEN PARCIAL - FUNDAMENTOS DE JAVASCRIPT</h1>");
document.writeln("<h2>Capítulo 1: Introducción a JavaScript</h2>");
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 1: VARIABLES Y TIPOS DE DATOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 1: Variables y Tipos de Datos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Declare las siguientes variables con los tipos de datos apropiados:
   - nombre (string): Su nombre completo
   - edad (number): Su edad
   - altura (number): Su altura en metros (con decimales)
   - esEstudiante (boolean): true si es estudiante, false si no
   - hobbies (array): Un array con 3 de sus pasatiempos favoritos
   - direccion (object): Un objeto con propiedades: calle, ciudad, pais

2. Muestre en consola el tipo de dato de cada variable usando typeof
3. Muestre en pantalla toda la información usando document.writeln
*/

// TU CÓDIGO AQUÍ
// Declare las variables solicitadas:
let nombre = "Mario José Piedras Lenis";
let edad = 23;
let altura = 1.88;
let esEstudiante = true;
let hobbies = ["Leer", "Escribir", "Jugar videojuegos"];
let direccion = {
   calle: "Carrera 16a #36-47",
   ciudad: "Palmira",
   pais: "Colombia"
};


// Muestre el tipo de dato de cada variable:
console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de altura:", typeof altura);
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);
console.log("Tipo de dato de hobbies:", typeof hobbies);
console.log("Tipo de dato de direccion:", typeof direccion);
// Muestre la información en pantalla:
document.writeln("<p><strong>Nombre:</strong> " + nombre + "</p>");
document.writeln("<p><strong>Edad:</strong> " + edad + "</p>");
document.writeln("<p><strong>Altura:</strong> " + altura + " metros</p>");
document.writeln("<p><strong>Es estudiante:</strong> " + esEstudiante + "</p>");
document.writeln("<p><strong>Hobbies:</strong> " + hobbies.join(", ") + "</p>");
document.writeln("<p><strong>Dirección:</strong> " + direccion.calle + ", " + direccion.ciudad + ", " + direccion.pais + "</p>");

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 2: OPERADORES MATEMÁTICOS Y CONVERSIÓN (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 2: Operadores Matemáticos y Conversión (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario dos números usando prompt()
2. Convierta los valores a números usando parseInt() y parseFloat()
3. Realice las siguientes operaciones:
   - Suma
   - Resta
   - Multiplicación
   - División
   - Módulo (residuo)
   - Potencia
4. Muestre los resultados en pantalla
5. Calcule el promedio de los dos números y redondee el resultado
*/

// TU CÓDIGO AQUÍ
// Solicite los números al usuario:
let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
// Convierta los valores:
num1 = parseFloat(num1);
num2 = parseFloat(num2);
// Realice las operaciones matemáticas:
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;
let potencia = Math.pow(num1, num2);
// Muestre los resultados en pantalla:
document.writeln("<p><strong>Suma: </strong>" + suma, "</p>");
document.writeln("<p><strong>Resta: </strong>" + resta, "</p>");
document.writeln("<p><strong>Multiplicación: </strong>" + multiplicacion, "</p>");
document.writeln("<p><strong>División: </strong>" + division, "</p>");
document.writeln("<p><strong>Módulo: </strong>" + modulo, "</p>");
document.writeln("<p><strong>Potencia: </strong>" + potencia, "</p>");
// Calcule el promedio y redondee:
let promedio = (num1 + num2) / 2;
promedio = Math.round(promedio); // Redondear
document.writeln("<p><strong>Promedio: </strong>" + promedio, "</p>");

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 3: OPERADORES DE COMPARACIÓN Y LÓGICOS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 3: Operadores de Comparación y Lógicos (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario su edad y si tiene licencia de conducir (sí/no)
2. Convierta la respuesta de licencia a boolean
3. Evalúe las siguientes condiciones:
   - Si es mayor de 18 años Y tiene licencia → "Puede conducir"
   - Si es mayor de 18 años PERO no tiene licencia → "Necesita obtener licencia"
   - Si es menor de 18 años → "No puede conducir aún"
4. Use operadores lógicos (&&, ||) para las evaluaciones
5. Muestre el resultado en pantalla
*/

// TU CÓDIGO AQUÍ
// Solicite la información al usuario:
let edadUsuario = prompt("Ingrese su edad: ");
let tieneLicencia = prompt("¿Tiene licencia de conducir? (sí/no): ").toLowerCase();

// Convierta y evalúe las condiciones:
switch (tieneLicencia) {
   case "sí":
      tieneLicencia = true;
      break;
   case "si":
      tieneLicencia = true;
      break;
   case "no":
      tieneLicencia = false;
      break;
   default:
      tieneLicencia = false; // Valor por defecto si la entrada es inválida
}
// Evaluación de condiciones y mostrar en pantalla:
if (edadUsuario >= 18){
   if (tieneLicencia) {
      document.writeln("<p>Puede conducir.</p>");
   } else {
      document.writeln("<p>Necesita obtener licencia.</p>");
   }
}else{
   document.writeln("<p>No puede conducir aún.</p>");
}

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 4: FUNCIONES MATEMÁTICAS Y STRINGS (15 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 4: Funciones Matemáticas y Strings (15 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree una función llamada calcularAreaCirculo que reciba el radio como parámetro
2. La función debe calcular el área usando Math.PI y Math.pow()
3. Redondee el resultado a 2 decimales usando Math.round()
4. Cree una función llamada formatearNombre que reciba nombre y apellido
5. La función debe convertir el nombre a mayúsculas y el apellido a minúsculas
6. Concatene ambos usando el método concat()
7. Pruebe las funciones con valores de ejemplo
*/

// TU CÓDIGO AQUÍ
// Función para calcular área del círculo:
function calcularAreaCirculo(radio) {
   let area = Math.PI * Math.pow(radio, 2);
   return area.toFixed(2); // Redondear a 2 decimales
}
// Función para formatear nombre:
function formatearNombre(nombre, apellido) {
   let nombreMayus = nombre.toUpperCase();
   let apellidoMinus = apellido.toLowerCase();
   return nombreMayus.concat(" ", apellidoMinus); // Concatenar
}
// Pruebe las funciones:
document.writeln("<p>Área del círculo con radio 5: " + calcularAreaCirculo(5) + " unidades cuadradas</p>");
document.writeln("<p>Nombre formateado: " + formatearNombre("Mario", "Piedras") + "</p>");
document.writeln("<hr>");

// ================================================================================
// EJERCICIO 5: ESTRUCTURAS DE CONTROL (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 5: Estructuras de Control (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Solicite al usuario un número del 1 al 7
2. Use switch-case para mostrar el día de la semana correspondiente:
   - 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves
   - 5 = Viernes, 6 = Sábado, 7 = Domingo
   - Cualquier otro valor = "Día inválido"
3. Solicite al usuario su calificación (0-100)
4. Use if-else if-else para determinar la nota:
   - 90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, 0-59 = F
5. Muestre ambos resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Switch para días de la semana:
let diaSemana = parseInt(prompt("Ingrese un número del 1 al 7 para el día de la semana:"));
switch (diaSemana) {
   case 1:
      document.writeln("<p>Día de la semana: Lunes</p>");
      break;
   case 2:
      document.writeln("<p>Día de la semana: Martes</p>");
      break;
   case 3:
      document.writeln("<p>Día de la semana: Miércoles</p>");
      break;
   case 4:
      document.writeln("<p>Día de la semana: Jueves</p>");
      break;
   case 5:
      document.writeln("<p>Día de la semana: Viernes</p>");
      break;
   case 6:
      document.writeln("<p>Día de la semana: Sábado</p>");
      break;
   case 7:
      document.writeln("<p>Día de la semana: Domingo</p>");
      break;
   default:
      document.writeln("<p>Día inválido</p>");
}
// If-else para calificaciones:
let calificacion = parseInt(prompt("Ingrese su calificación (0-100):"));
if (calificacion >= 90 && calificacion <= 100) {
   document.writeln("<p>Nota: A</p>");
} else if (calificacion >= 80 && calificacion < 90) {
   document.writeln("<p>Nota: B</p>");
} else if (calificacion >= 70 && calificacion < 80) {
   document.writeln("<p>Nota: C</p>");
} else if (calificacion >= 60 && calificacion < 70) {
   document.writeln("<p>Nota: D</p>");
} else if (calificacion >= 0 && calificacion < 60) {
   document.writeln("<p>Nota: F</p>");
} else if (calificacion < 0 || calificacion > 100) {
   document.writeln("<p>Calificación inválida</p>");
}

document.writeln("<hr>");

// ================================================================================
// EJERCICIO 6: CICLOS Y ARRAYS (20 puntos)
// ================================================================================
document.writeln("<h3>EJERCICIO 6: Ciclos y Arrays (20 puntos)</h3>");

/*
INSTRUCCIONES:
1. Cree un array con 5 números aleatorios entre 1 y 100
2. Use un ciclo for para mostrar todos los números del array
3. Calcule la suma de todos los números del array
4. Encuentre el número mayor y el menor del array
5. Use un ciclo while para contar cuántos números son pares
6. Muestre todos los resultados en pantalla
*/

// TU CÓDIGO AQUÍ
// Cree el array con números aleatorios:
let numeros = [33,77,12,45,89]; 

// Muestre todos los números:
for (let i = 0; i < numeros.length; i++) {
   document.writeln("<p>Número " + (i + 1) + ": " + numeros[i] + "</p>");
}
// Calcule la suma:
for (let i = 0; i < numeros.length; i++) {
   suma += numeros[i]; 
}
document.writeln("<p><strong>Suma de números:</strong> " + suma + "</p>");
// Encuentre mayor y menor:

// Cuente números pares:

document.writeln("<hr>");

// ================================================================================
// BONUS: PROGRAMACIÓN ORIENTADA A OBJETOS (10 puntos extra)
// ================================================================================
document.writeln("<h3>BONUS: Programación Orientada a Objetos (10 puntos extra)</h3>");

/*
INSTRUCCIONES:
1. Cree una clase llamada Estudiante con las siguientes propiedades:
   - nombre, edad, carrera, promedio
2. Agregue un método llamado mostrarInfo() que muestre toda la información
3. Agregue un método llamado calcularEstado() que retorne:
   - "Excelente" si promedio >= 4.5
   - "Bueno" si promedio >= 3.5
   - "Regular" si promedio >= 3.0
   - "Necesita mejorar" si promedio < 3.0
4. Cree una instancia de la clase y pruebe los métodos
*/

// TU CÓDIGO AQUÍ
// Defina la clase Estudiante:

// Cree una instancia y pruebe los métodos:

document.writeln("<hr>");
document.writeln("<h2>¡FIN DEL EXAMEN!</h2>");
document.writeln("<p>Revisa la consola para ver todos los resultados.</p>");

console.log("=== EXAMEN COMPLETADO ==="); 