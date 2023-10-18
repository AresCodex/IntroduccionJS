// Array methods

const meses =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach (function (mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
const resultado = meses.includes ('Marzo');
const resultado2 = carrito.includes ('Celular');
console.log (resultado)
console.log (resultado2)

//Some ideal para arreglo de obejetos
resultado3 = carrito.some (function(producto){
    return producto.nombre === 'Celular'
})
console.log (resultado3);

// Reduce
resultado4 = carrito.reduce (function(total,producto){
    return total + producto.precio 
}, 0);

console.log (resultado4);


// Filter
resultado5 = carrito.filter (function (producto){
    return producto.precio > 400
});
resultado6 = carrito.filter (function (producto){
    return producto.nombre === 'Celular'
});

console.log (resultado5);
console.log (resultado6);