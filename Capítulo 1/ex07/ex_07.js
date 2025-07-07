/* Las funciones matematicas en JavaScript utilizando la clase Math.
Estas funciones permiten realizar operaciones dentro del codigo.
*/
//Se declara la variable con valor decimal, la funcion round la vulve entero
var precio = Math.round(399.53);
document.writeln("precio redondeado: ",precio, "<br>");
console.log("precio redondeado: ",precio);

//Esta la redondea teniendo en cuenta que si es menor de .50 sera hacia abajo, y si es.50 o más sera hacia arriba
precio = Math.round(399.43);
document.writeln("precio redondeado: ",precio, "<br>");
console.log("precio redondeado: ",precio);

//Esta redonde hacia arriba sin importar el decimal
precio = Math.ceil(399.01);
document.writeln("precio redondeado: ",precio, "<br>");
console.log("precio redondeado: ",precio);

//Esta redonde hacia abajo sin importar el decimal
precio = Math.floor(399.99);
document.writeln("precio redondeado: ",precio, "<br>");
console.log("precio redondeado: ",precio);

//Esta calcula el valor del angulo seno
var seno = Math.sin(40);
document.writeln("El valor del seno de 40 grados es: ",seno, "<br>");
console.log("El valor del seno de 40 grados es: ",seno);

//Esta calcula el valor del angulo coseno
var coseno = Math.cos(50);
document.writeln("El valor del coseno de 50 grados es: ",coseno, "<br>");
console.log("El valor del coseno de 50 grados es: ",coseno);

//Esta calcula el valor del angulo tangante
var tangente = Math.tan(68);
document.writeln("El valor de la tangente de 68 grados es: ",tangente, "<br>");
console.log("El valor del tangente de 68 grados es: ",tangente);

//Esta calcula el exponencial de n
var exponencial = Math.exp(2);
document.writeln("El exponencia de 2 es: ",exponencial, "<br>");
console.log("El exponencia de 2 es: ",exponencial);

//Esta calcula el exponencial de n elevado a la m
var exponencial = Math.pow(4,2);
document.writeln("El exponencia de 4 elevado a la 2 es: ",exponencial, "<br>");
console.log("El exponencia de 4 elevado a la 2 es: ",exponencial);

//Esta calcula el logaritmo de n 
var logaritmo = Math.log(10);
document.writeln("El logaritmo de 10 es: ",logaritmo, "<br>");
console.log("El logaritmo de 10 es: ",exponencial);

//Esta calcula el valor absoluto de n, es decir, se vuelve positvo.
var absoluto = Math.abs(-10);
document.writeln("El valor absoluto de -10 es: ",absoluto, "<br>");
console.log("El valor absoluto de -10 es: ",absoluto);

//Esta calcula la raiz cuadrada de n
var raiz = Math.sqrt(81);
document.writeln("La raiz cuadrada de 81 es: ",raiz, "<br>");
console.log("La raiz cuadrada de 81 es: ",raiz);

//Esta genera un numero aleatorio
var aleatorio = Math.random();
document.writeln("El valor aleatorio o random es: ",aleatorio, "<br>");
console.log("El valor aleatorio o random es: ",aleatorio);

/*Esta formula genera un numero aleatorio entre 5 a 15. 
Primero genera un numero entre 0.0 y 9.99999.
luego se multiplica con cierta furmula ((max-min+1)+5) el 15 seria el valor maximo, el valor 5 seria el minimo, el 1 es para evitar que que el rango sea de 4 a 14 y el 5 al final es para comenzar los valores desde 5.
seria para hacer que el floor redonde de manera correecta entre 5 y 15
*/
var numRam = Math.floor(Math.random()*(15-5+1)+5);
document.writeln("El valor aleatorio o random entre 5 y 15 es: ",numRam, "<br>");
console.log("El valor aleatorio o random entre 5 y 15 es: ",numRam);