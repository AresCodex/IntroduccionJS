// Fetch API

async function obtenerEmpleados () {
    const archivo = '../js/empleados.json';
    const resultado = await fetch (archivo);
    console.log(resultado)
    const datos = await resultado.json ();
    console.log (datos);
}

obtenerEmpleados();

    // fetch (archivo)
    //     .then (resultado => {
    //         return resultado.json ();
    //     })
    //     .then( datos => {
    //         // console.log (datos);
    
    //         const { empleados } = datos;
    //         console.log(empleados);
    
    //         // empleados.forEach(empleado => {
        //         //     console.log(empleado);
        //         //     console.log(empleado.id);
        //         //     console.log(empleado.nombre);
        //         //     console.log(empleado.puesto);
        //         })
        
        //     })
    