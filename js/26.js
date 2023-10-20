// This

const reservacion = {
    nombre: 'alan',
    apellido: 'flores',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log ( `El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

const reservacion2 = {
    nombre: 'irving',
    apellido: 'alvarez',
    total: 5000,
    pagado: false,
    informacion2: function () {
        console.log ( `El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion ();
reservacion2.informacion2 ();
