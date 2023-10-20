// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve ('Usuario autenticado');  //EL PROMISE SE CUMPLE
    } else {
        reject ('No se pudo iniciar sesion');  //EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then (resultado => console.log('resultado'))
    .catch (error => console.log('error'))


//En los usuarios existen 3 valores
//Pending : no se ha cumplido pero no se ah rechazado
//Fulfielled : ya se cumplio
//Reject : Se ha rechazado o no se pudo cumplir
