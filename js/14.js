// Arreglos o Arrays

const numero = [10,20,30,40,50];



const meses =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];



const arreglo = ["Hola", 10, true, "si", null, {nombre: "alan",}, [1,2,3]];

console.log (arreglo)

//Acceder a los valores de un arreglo 
// console.log (numero[4]);


// Conocer la extencion de un arreglo

// console.log (meses.length);

// numero.forEach( function(numero) {
//     console.log (numero)
// })


// numero [5] = 60; //forma no comun
// numero [6] = 70;

numero.push ( 60 ); //al final del arreglo
numero.unshift (-10,-20,-30) // al inicio del arreglo

console.table (numero);


// meses.pop (); elimina el último elemento
// meses.shift (); elimina el primer elemento

// meses.splice (2,1);

// console.table (meses);

// Rest operator o Spread operator

const nuevoArreglo = [... meses, 'Junio']; //poner el valor nuevo al inicio para sustituir el shift
console.log (nuevoArreglo);


