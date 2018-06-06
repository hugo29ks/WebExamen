import {Injectable} from "@nestjs/common";

@Injectable()
export class ProductoService {

    arregloProductos: Producto[] = [];

    crearProducto(producto: Producto): Producto[]{
        this.arregloProductos.push(producto);
        return this.arregloProductos;
    }

    listarTodos(){
        return this.arregloProductos;
    }

    obtenerUno(id){
        const productoEncontrado = this.arregloProductos.find(producto => producto.id === id);
        return productoEncontrado;
    }

    editarUno(id, nProducto, nombre, descripcion, precio, fechaLanzamiento, aniosGarantia, tiendaId){
        let tiendaEditado = this.obtenerUno(id);

        tiendaEditado.nProducto = nProducto;
        tiendaEditado.nombre = nombre;
        tiendaEditado.descripcion = descripcion;
        tiendaEditado.precio = precio;
        tiendaEditado.fechaLanzamiento = fechaLanzamiento;
        tiendaEditado.aniosGarantia = aniosGarantia;
        tiendaEditado.tiendaId = tiendaId;

        return tiendaEditado;
    }

}


export class Producto {

    constructor(
        public id: number,
        public nProducto: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public fechaLanzamiento: string,
        public aniosGarantia: number,
        public tiendaId: number,
    ){};
}