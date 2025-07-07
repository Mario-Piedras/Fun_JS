/*POO

Los paradigmas principalmente que dan paso a la POO son con Estado, junto con el Imperativo y el Declarativo

Pilares de la Programación Orientada a Objetos

Abstracción: Oculta detalles internos y muestra las características relevantes.

Encapsulamiento: Protege los datos de un objeto para evitar accesos indebidos, promoviendo el uso de métodos públicos para interactuar con ellos.

Herencia: Permite que una clase reutilice los atributos y métodos de otra, promoviendo la extensión y personalización.

Polimorfismo: Habilidad de un método o función para comportarse de diferentes maneras según el objeto o los argumentos con los que interactúa.

*/

class Vehiculo {
  constructor(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.encendido = false; // Estado del vehículo, por defecto está apagado
  }

  encender() {
    this.encendido = true;
    console.log(`El vehículo ${this.marca} ${this.modelo} está encendido.`);
  }

  apagar() {
    this.encendido = false;
    console.log(`El vehículo ${this.marca} ${this.modelo} está apagado.`);
  }
  tocarBocina() {
    console.log(`beep beep!`);
  }

  mostrarDetalles() {
    console.log(
      `Vehículo: Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}`
    );
  }
}

// Crear una instancia de la clase Vehiculo
const miVehiculo = new Vehiculo("Toyota", "Corolla", "Rojo", 2020);

// Probar los métodos de la clase Vehiculo
miVehiculo.encender();
miVehiculo.apagar();
miVehiculo.tocarBocina();
miVehiculo.mostrarDetalles();

class animal {
  constructor(nombre, especie, sonido) {
    this.nombre = nombre;
    this.especie = especie;
    this.sonido = sonido;
  }

  hacerSonido() {
    console.log(`${this.sonido}`);
  }

  mostrarDetalles() {
    console.log(`Animal: Nombre: ${this.nombre}, Especie: ${this.especie}`);
  }
}
// Crear una instancia de la clase animal
const miPerro = new animal("Fitulaís", "Perro", "Guau");
const miGato = new animal("Michi", "Gato", "Miau");

//probar los métodos de la clase animal
miPerro.mostrarDetalles();
miPerro.hacerSonido();

miGato.mostrarDetalles();
miGato.hacerSonido();
