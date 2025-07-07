/* Promesas Solicitudes y Respuestas

Teoría

Peticiones:

GET. Se utiliza para obtener información de un servidor.  
POST. Se utiliza para enviar información al servidor.  
PUT. Se utiliza para actualizar un recurso en un servidor.  
DELETE. Se utiliza para eliminar un recurso que se encuentra en un servidor.

Respuestas:

Las respuestas a estas peticiones y/o solicitudes http van a traer consigo  
un código de estado http estos códigos son números que indican cuál ha sido  
el resultado de las solicitudes y los códigos más comunes que se pueden  
recibir son:

El código 200 para indicar que la respuesta fue completada exitosamente.  
El código 201 que indica cuando un elemento se ha creado en caso de que se  
haya solicitado eso.  
El código 204 que significa que la respuesta ha venido sin contenido.  
El código 400 que quiere decir que es una solicitud incorrecta.  
El código 401 que significa que la solicitud no fue autorizada por el  
servidor al que se la está pidiendo.

200 Respuesta completada  
201 Elemento creado  
204 Respuesta vacía  
400 Mal solicitado
401 No autorizado

Resumen:  
Las promesas y las solicitudes http son muy importantes en javascript para poder  
manejar la asincronía y la comunicación con servidores externos y con ellos se pueden  
crear aplicaciones dinámicas responsivas que puedan actualizarse y cambien en tiempo  
real sin bloquear la ejecución del resto de las aplicaciones.

Catch: La funcionalidad catch es un método que se utiliza en promesas para manejar  
posibles errores, es una forma de atrapar a cualquier error que ocurra en el código  
dentro de una promesa y realizar una acción específica en caso de que ocurra dicho  
error. 

let datosJson;  
fetch( './cap4.JSON/ex32_practica_biblioteca/libros.json' )  
  .then(res => res.json())  
  .then((salida) => {  
    datosJson = salida;  
    let elementoTexto = document.getElementById( 'titulo' );  
    elementoTexto.textContent = datosJson.biblioteca[0].titulo;  
  })  
  .catch(function(error){alert(error)}); */

let datosJSON;
fetch(`/Capítulo 4/ex32/biblioteca.json`) // Ruta donde se encuentra el archivo JSON
    .then(res => res.json()) //Cuando la respuesta llega, esta aún no está en formato JSON. Aquí, usas .json() para transformarla.
    .then((salida) => { // Ya tienes los datos convertidos a objeto. Aquí los usas para crear los divs con la información de los libros.
        const contenedor = document.getElementById("contenedor"); //Este es el contenedor principal (div) que se encuentra el HTML. en este se crearan varios divs hijos para mostrar los libros.
        salida.biblioteca.forEach((libro, index) => { //Iterador para recorrer el array de libros dentro del objeto JSON.
            // Se crea una variable y se le indica que sera un div, de esta manera, podremos ingresarle infomración y agregarlo al contenedor principal.
            const divLibro = document.createElement("div");
            // Con el innerHTML se le agrega el contenido HTML al divLibro, que es un div que contiene la información de cada libro.
            divLibro.innerHTML = `
                <h3>Libro ${index + 1}</h3>
                <p><strong>Título:</strong> ${libro.titulo || 'No definido'}</p>
                <p><strong>Editorial:</strong> ${libro.editorial || 'No definido'}</p>
                <p><strong>Edición:</strong> ${libro.edicion || 'No definido'}</p>
                <p><strong>ISBN:</strong> ${libro.isbn || 'No definido'}</p>
                <p><strong>Autor/es:</strong> ${libro.autores["autor principal"] || 'No definido'}</p>
                <p><strong>Código SENA:</strong> ${libro["codigo sena"].join(', ') || 'No definido'}</p>
                <p><strong>Descripción:</strong> ${libro.descripcion || 'No definido'}</p>
                <hr>
            `;
            // La parte de auyores esta llamando un objeto dentro del objeto JSON, por lo que se debe tener en cuenta que si no existe el autor principal, se mostrará "No definido". puede hacerse para mostrar todos los autores con un foreach, pero en este caso se ha optado por mostrar solo el autor principal.
            // El join(', ') se utiliza para unir los elementos del array "codigo sena" en una cadena de texto separada por comas. Si el array está vacío, se mostrará "No definido".
            contenedor.appendChild(divLibro); // El append chil lo que hace es manda al HTML el divLibro que se ha creado, de esta manera, se va a ir creando un div por cada libro que se encuentre en el JSON.
        });
    })
    .catch(error => alert("Error: " + error)); // Manejo de errores en caso de que la solicitud falle.