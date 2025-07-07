async function SUMAR(num1,num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject(new Error('Alguno de los argumentos no es un número'));
      }else{
        resolve(num1 + num2);
      }
    }, 2000)
  });
}

async function manejoErrores() {
  try{
    let resultado = await SUMAR(5, '10');
    console.log(`El resultado es: ${resultado}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

manejoErrores();