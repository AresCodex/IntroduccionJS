
// const puntaje = 1000

// if (puntaje === 1000) {
//     console.log ('El puntaje es 1000');
// } else {
//     console.log ('No es Igual')
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito ) {
//     console.log ('El usuario puede pagar ');
// }
// else {
//     console.log ('Fondos Insuficientes');
// }

const rol = 'Editor';

if(rol === 'ADMINISTRADOR') {
    console.log ('Acesso a todo el sistema');

} else if (rol === 'Editor')
    console.log ('Eres editor no puedes acceder a todas las fucniones')

else {
    console.log ('No tienes Acceso')
}