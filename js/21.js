// Arrow Functions

const sumar2 =  (n1, n2) => console.log (n1 + n2 );
sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log (`Aprendiendo ${tecnologia}`)

aprendiendo(('JavaScript'))

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
meses.forEach( mes => {
    if (mes == 'Marzo') {
        console.log ('Marzo si Existe')
    }
})


//Some ideal para arreglo de obejetos
resultado3 = carrito.some (producto => producto.nombre === 'Celular')
console.log (resultado3);

// Reduce
resultado4 = carrito.reduce ((total,producto) =>  total + producto.precio , 0);

console.log (resultado4);


// Filter
resultado5 = carrito.filter (producto  => producto.precio > 400);

resultado6 = carrito.filter ((producto) => producto.nombre === 'Celular');

console.log (resultado5);
console.log (resultado6);