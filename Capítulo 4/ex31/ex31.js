/*
Los archivos .json (JavaScript Object Notation) se utilizan para almacenar y transportar datos de manera estructurada y legible tanto por humanos como por máquinas. Son muy comunes en desarrollo web, aplicaciones móviles, y sistemas que requieren intercambio de datos.

¿Para qué sirven específicamente?
1. Intercambio de datos entre servidor y cliente
En aplicaciones web, los datos se suelen enviar y recibir en formato JSON.
Ejemplo: Un servidor puede enviar los datos de un usuario a una app en formato JSON.

2. Configuraciones
Muchas herramientas y aplicaciones (como Visual Studio Code, ESLint, Babel, etc.) usan archivos .json para definir sus configuraciones.
Ejemplo: package.json en proyectos de Node.js contiene información del proyecto y sus dependencias.

3. Almacenamiento ligero de datos
Puedes usar JSON para guardar información estructurada en archivos planos, como si fuera una base de datos muy simple.
Ejemplo: Almacenar una lista de tareas, productos o usuarios.

4. APIs REST
Las APIs modernas suelen comunicarse con JSON como formato estándar para solicitudes y respuestas. 
*/

let persona = {
    "nombre":"Mario",
    "edad":"23",
    "aprendiz": true,
    "residencia":{
        "Direccio":" calle 20a trasversal #16-57",
        "ciudad": "Palmira",
        "departamento":"Valle del cauca"
    },
    "telefono":"3158555749"
}

let elementoTexto = document.getElementById('nombre');
elementoTexto.textContent = persona.nombre;