// Meotodo de propiedad

const reproductor = {
    reproducir : function (id){
        console.log (`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function () {
        console.log ('pausando...')
    },
    crearPlaylist: function (nombre) {
        console.log (`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log (`Reproduciendo la Playllist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log (`Eliminando la Canción ${id}`)

}


reproductor.reproducir (3840);
reproductor.pausar ();
reproductor.borrarCancion (20);
reproductor.crearPlaylist ('Rap');
reproductor.reproducirPlaylist ('Rap');