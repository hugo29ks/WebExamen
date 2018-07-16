import {HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Like, Repository} from "typeorm";
import {UsuarioData} from "./usuario.data";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,) {

    }

    crearUsuario() {
        for(var usuarios in UsuarioData) {
            const usuario = new UsuarioEntity();
            usuario.user = UsuarioData[usuarios].user;
            usuario.password = UsuarioData[usuarios].password;
            usuario.nombreUsuario = UsuarioData[usuarios].nombreUsuario;
            usuario.apellidoUsuario = UsuarioData[usuarios].apellidoUsuario;
            this._usuarioRepository.save(usuario);
        }
        return this._usuarioRepository.find();
    }

    async listarTodos(): Promise<UsuarioEntity[]> {
        return await this._usuarioRepository.find();
    }

    async buscarUsuarios(nombreBuscar: string): Promise<UsuarioEntity[]> {
        return await this._usuarioRepository.find({ nombreUsuario: Like('%' + nombreBuscar + '%') });
    }
}