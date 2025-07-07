//Mostrar los valores de un select en JavaScript
//Función que sera llamada por el select(caja de opciones)
function cambiarColor() {
  //Obtenemos la caja de opciones(select) mediante su id la cual es "select" y la guardamos en la variable seleccion
  let seleccion = document.getElementById("select");
  //Mostramos el valor del index seleccionado en la caja de texto con id "text1". Tener en cuenta que en esta solo se mostrara el indice del elemento seleccionado
  document.getElementById("text1").value = seleccion.selectedIndex;
  //Mostramos el texto del elemento seleccionado en la caja de texto con id "text2". Lo que se encuentra entre corcehtes es un metodo para optener el indice del elemento seleccionado, lo que perite agregar el metodo ".text" para obtener el texto del elemento seleccionado
  document.getElementById("text2").value = seleccion.options[seleccion.selectedIndex].text;
  //Mostramos el valor del elemento seleccionado en la caja de texto con id "text3". Lo que se encuentra entre corchetes es un metodo para obtener el indice del elemento seleccionado, lo que permite agregar el metodo ".value" para obtener el valor del elemento seleccionado
  //Nota: El valor del elemento seleccionado es el que se encuentra en el atributo value del elemento option
  document.getElementById("text3").value = seleccion.options[seleccion.selectedIndex].value;
}