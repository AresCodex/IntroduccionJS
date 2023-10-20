// For loop

// for ( let i = 0; i < 10; i++ ) {
//     console.log (i);

// }

// for ( let i = 0; i < 10; i++ ) {
//     if ( i % 2 === 0  ) {
//         console.log (`El numero ${i} es PAR`)

//     } else {
//         console.log (`El numero ${i} es IMPAR`)
//     }
// }

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


for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


// While loop

// let i = 1; //indice

// while (i <= 100) { //condicion
// if (i % 2 === 0) {
    
//     console.log (`El número ${i} es PAR`)
//  } else {
//     console.log (`El número ${i} es IMPAR`)
//  }

// let i = 20;

// while (i < 10 ) {

// console.log (`Desde el while loop`)
//     i++; //incremento
// }



// do while loop

let i = 100;

do {
    console.log (i);


    i++;
} while (i < 10);