import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('Usuario')
export class UsuarioController {

    constructor( private _usuarioService: UsuarioService){

    }
    @Post()
    crearUsuario() {
        return this._usuarioService.crearUsuario();
    }

    @Get()
    async listarTodos(@Res () response,
                      @Req () request) {
        const usuarios = await this._usuarioService.listarTodos();
        if(Object.keys(usuarios).length === 0){
            return response.send({
                mensaje:'No existe ningun Usuario',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(usuarios);
        }
    }

    @Get('/:nombreBuscar')
    async buscarUsuarios(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._usuarioService.buscarUsuarios(paramParams.nombreBuscar);
        return response.status(202).send(usuarios);
    }
}