import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {TiendaService, Tienda} from "./tienda.service";
import {TiendaPipe} from "../pipes/tienda.pipe";
import {TIENDA_SCHEMA} from "./tienda.schema";


@Controller('Tienda')
export  class TiendaController {

    constructor(private  _tiendaService: TiendaService){

    }

    @Get()
    listarTodo(@Res () response,
                @Req () request){
        var arregloTienda = this._tiendaService.listarTodo();
        if(Object.keys(arregloTienda).length === 0){
            return response.send({
                mensaje:'No existe ninguna Tienda',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloTienda);
        }
    }

    @Post()
    crearTienda(@Body(new TiendaPipe(TIENDA_SCHEMA)) bodyParams) {
            const tiendaNuevo = new Tienda(
                bodyParams.id,
                bodyParams.nombres,
                bodyParams.direccion,
                bodyParams.fechaApertura,
                bodyParams.RUC,
                bodyParams.matriz,
            );
            return this._tiendaService.crearTienda(tiendaNuevo);
    }

    @Get('/:id')
    obtenerUno(@Res () response,
                    @Req () request,
                    @Param() paramParams){

        const tienda = this._tiendaService.obtenerUno(paramParams.id);
        if (tienda) {
            return response.send(tienda);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Tienda no existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }

    @Put('/:id')
    editarUno(@Res () response,
              @Req () request,
              @Param() paramParams,
              @Body(new TiendaPipe(TIENDA_SCHEMA)) bodyParams){
        if(this._tiendaService.obtenerUno(paramParams.id)) {
            const tienda = this._tiendaService.editarUno(paramParams.id,
                bodyParams.nombres,
                bodyParams.direccion,
                bodyParams.fechaApertura,
                bodyParams.RUC,
                bodyParams.matriz);
            return response.send(tienda);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Tienda no existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }
}

