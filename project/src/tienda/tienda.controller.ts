import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {TiendaEntity} from "./tienda.entity";
import {TiendaService} from "./tienda.service";


@Controller('Tienda')
export  class TiendaController {

    constructor(private _tiendaService: TiendaService) {

    }

    @Post()
    crearTienda() {
        return this._tiendaService.crearTienda();
    }

    @Get()
    async listarTodos(@Res() response,
                      @Req() request) {
        const tiendas = await this._tiendaService.listarTodos();
        if (Object.keys(tiendas).length === 0) {
            return response.send({
                mensaje: 'No existe Tienda',
                estado: HttpStatus.NOT_FOUND,
            });
        } else {
            return response.status(202).send(tiendas);
        }
    }

    @Get('/:nombresBuscar')
    async buscarTiendas(@Param() paramParams,
                        @Res() response) {
        const tiendas = await this._tiendaService.buscarTiendas(paramParams.nombresBuscar);
        return response.status(202).send(tiendas);
    }
}