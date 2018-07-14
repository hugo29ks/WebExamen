import {Controller, Post} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('Usuario')
export class UsuarioController {

    constructor( private _usuarioService: UsuarioService){

    }

    @Post()
    crearUsuario() {
        const usuarios = new UsuarioEntity();
        usuarios.usuario = "pp";
        usuarios.password = "123pp";
        return this._usuarioService.crearUsuario(usuarios);
    }
}