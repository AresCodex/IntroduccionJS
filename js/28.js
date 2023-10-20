// Clases


class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto (){
        return `El producto ${this.nombre} tiene el precio de : $ ${this.precio} `;
    }
}

class Caja {
    constructor (nombre, precio,) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearCaja (){
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }

}

const producto2 = new Producto ('Monitor curvo de 49"', 800,);
const producto3 = new Producto ('Laptop', 1800,);
const caja = new Producto ('Caja', 18,);

//Herencia

class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto (){
        return `${super.formatearProducto ()} y su ISB es ${this.isbn}`;
    }
}


const libro = new Libro('JavaScript la Revolución', 120, '4568975312156456');
console.log(libro.formatearProducto ());
console.log(producto2.formatearProducto ());
