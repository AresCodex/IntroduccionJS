// Programacion orientada a objetos (POO)

// onject literal
const producto = {
    nombre: 'tablet',
    precio: 500

}

// Object constructor

function Producto (nombre, precio, disponible, tamaño) {
    this.nombre = nombre;
    this.precio = precio;


}
const producto2 = new Producto ('Monitor curvo de 49"', 800,);
const producto3 = new Producto ('Laptop', 1800,);

function formatearProducto (preducto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio} `;
}

console.log (producto2);
console.log (producto3);

console.log ( formatearProducto (producto2));

//Crear Funciones que solo utilizan un objeto en especifico
Producto.prototype.formatearProducto = function () {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio} `;
}

console.log (producto2.formatearProducto ());
console.log (producto3.formatearProducto ());