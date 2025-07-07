async function obtenerDatos(){
  try{
    const resUsuarios = await fetch('https://fakestoreapi.com/users');
    const usuarios = await resUsuarios.json();
    console.log('Usuarios:', usuarios);

    const resProductos = await fetch('https://fakestoreapi.com/products');
    const productos = await resProductos.json();
    console.log('Productos:', productos);

    const resCarritos = await fetch('https://fakestoreapi.com/carts');
    const carritos = await resCarritos.json();
    console.log('Carritos:', carritos);

    if (usuarios.length > 0 && productos.length > 0 && carritos.length>0){
      console.log('Todos los datos se han obtenido correctamente.');
      const primerUsuario = usuarios[0];
      const carritoUsuario = carritos.find(carrito => carrito.userId === primerUsuario.id);
      console.log('Primer usuario:', primerUsuario);
      console.log(`\n El usuario ${primerUsuario.name.firstname} tiene el carrito con ID: ${carritoUsuario.id}`);
      console.log('Contenido del carrito:', carritoUsuario.products);
    }
  }catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

obtenerDatos();