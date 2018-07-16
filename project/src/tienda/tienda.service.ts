import {Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {TiendaEntity} from "./tienda.entity";
import {TiendaData} from "./tienda.data";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AutorService {

    constructor(
        @InjectRepository(TiendaEntity)
        private readonly _tiendaRepository: Repository<TiendaEntity>) {

    }

    crearTienda(){
        for(var tiendas in TiendaData) {
            const tienda = new TiendaEntity();
            tienda.idTienda = TiendaData[tiendas].idTienda;
            tienda.nombres = TiendaData[tiendas].nombres;
            tienda.direccion = TiendaData[tiendas].direccion;
            tienda.fechaApertura = TiendaData[tiendas].fechaApertura;
            tienda.RUC = TiendaData[tiendas].RUC;
            tienda.matriz = TiendaData[tiendas].matriz;
            this._tiendaRepository.save(tienda);
        }
        return this._tiendaRepository.find();
    }

    async listarTodos(): Promise<TiendaEntity[]> {
        return await this._tiendaRepository.find();
    }

    async buscarTiendas(nombresBuscar: string): Promise<TiendaEntity[]> {
        return await this._tiendaRepository.find({ nombres: Like('%' + nombresBuscar + '%') });
    }