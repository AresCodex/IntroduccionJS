'use strict'; //correr JS en modo estricto
// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//.freeze no deja modificar ni agregar .seal permite editar pero no agregar propiedades

Object.seal(producto)

producto.imagen = 'imagen.jpg';


console.log (producto);