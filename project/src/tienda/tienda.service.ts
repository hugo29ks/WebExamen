import {Injectable} from "@nestjs/common";

@Injectable()
export class TiendaService {

    arregloTienda: Tienda[] = [];

    crearTienda(tienda: Tienda): Tienda[]{
        this.arregloTienda.push(tienda);
        return this.arregloTienda;
    }

    listarTodo() {
        return this.arregloTienda;
    }

    obtenerUno(id) {
        const tiendaObtenida = this.arregloTienda.find(tienda => tienda.id === id);
        return tiendaObtenida;
    }

    editarUno(id, nombres, direccion, fechaApertura, RUC, matriz) {
        let index = this.arregloTienda.findIndex(tienda => tienda.id === id);
        let tiendaEditado = this.arregloTienda[index];
        tiendaEditado.nombres = nombres;
        tiendaEditado.direccion = direccion;
        tiendaEditado.fechaApertura = fechaApertura;
        tiendaEditado.RUC = RUC;
        tiendaEditado.matriz = matriz;

        return tiendaEditado;
    }
}


export class Tienda {

    constructor(
        public id: number,
        public nombres: string,
        public direccion: string,
        public fechaApertura: string,
        public RUC: number,
        public matriz: boolean,
    ){};

}