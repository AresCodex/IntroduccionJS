// function sumar (n1,n2) {
//     return n1 + n2;
// }

// const resultado = sumar (2, 3);

// console.log (resultado);


let total = 0;

function agregarCarrito (precio) {
    return total += precio;

}

function carlcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(800);

console.log (total);

const totalApagar = carlcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalApagar}`);