//Acceder a archivos JSON con Fetch.

let datosJSON;
fetch(`/Capítulo 4/ex32/biblioteca.json`) //Ruta donde se encuentra el archivo JSON
    .then(res => res.json()) 
    //La función then son promesas que se van a ejecutar automaticamente una vez  que la promesa se haya resuelto exitosamente (200). Es decir, que se ejecutará cuando reciba la respueta.
    .then((salida) => {
        //Esta función se ejecuta cuando las primeras promesa se haya resuelto.
        datosJSON = salida; //Se alamcena en la variable el objeto JSON parseado para mostrarlo.

        let elementoTexto = document.getElementById("titulo"); //Se obtiene el id del HTML.
        elementoTexto.textContent = datosJSON.biblioteca[2].titulo; //Se muestra lo que se necesita del objeto JSON.
    })