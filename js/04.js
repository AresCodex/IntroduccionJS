//Tipos de dato o tipo de valor
//string cadena de textos
const producto = "Monitor de 20 Pulganas";
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor 30 Pulgadas');


console.log(producto)
console.log(producto2)
console.log(typeof producto3) //typeof muestra si es objeto o string

//.length para ver cuantos caracteres tiene

// Indexof (retorna posición)

console.log (producto2.indexOf( 'Pulgadas'))

//includes (retorna true o false)