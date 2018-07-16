import {Injectable} from "@nestjs/common";
import {ProductoEntity} from "./producto.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {ProductoData} from "./producto.data";

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(ProductoEntity)
        private readonly _productoRepository: Repository<ProductoEntity>) {

    }
    crearProducto(){
        for(var productos in ProductoData) {
            const producto = new ProductoEntity();
            producto.id = ProductoData[productos].id;
            producto.nProducto = ProductoData[productos].nProducto;
            producto.nombre = ProductoData[productos].nombre;
            producto.descripcion = ProductoData[productos].descripcion;
            producto.precio = ProductoData[productos].precio;
            producto.fechaLanzamiento = ProductoData[productos].fechaLanzamiento;
            producto.aniosGarantia = ProductoData[productos].aniosGarantia;
            producto.tiendaId = ProductoData[productos].tiendaId;
            this._productoRepository.save(producto);
        }
        return this._productoRepository.find();
    }

    async listarTodos(): Promise<ProductoEntity[]> {
        return await this._productoRepository.find();
    }

    async buscarProductos(nombreBuscar: string): Promise<ProductoEntity[]> {
        return await this._productoRepository.find({ nombre: Like('%' + nombreBuscar + '%') });
    }
    

   /* obtenerUno(id){
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
    }*/

}

