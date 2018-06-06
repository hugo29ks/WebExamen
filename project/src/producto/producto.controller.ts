import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {ProductoService, Producto} from "./producto.service";
import {ProductoPipe} from "../pipes/producto";
import {PRODUCTO_SCHEMA} from "./producto.schema";

@Controller('Producto')
export class ProductoController {

    constructor(private  _productoService: ProductoService){

    }

    @Get()
    listarTodos(@Res () response,
                @Req () request){
        var arregloProducto = this._productoService.listarTodos();
        if(Object.keys(arregloProducto).length === 0){
            return response.send({
                mensaje:'No existe ninguna tienda',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloProducto);
        }
    }

    @Post()
    crearProducto(@Body(new ProductoPipe(PRODUCTO_SCHEMA)) bodyParams) {
        const productoNuevo = new Producto(
            bodyParams.id,
            bodyParams.nProducto,
            bodyParams.nombre,
            bodyParams.descripcion,
            bodyParams.precio,
            bodyParams.fechaLanzamiento,
            bodyParams.aniosGarantia,
            bodyParams.tiendaId
        );
        return this._productoService.crearProducto(productoNuevo);
    }

    @Get('/:id')
    obtenerUno(@Res () response,
               @Req () request,
               @Param() paramParams){

        const producto = this._productoService.obtenerUno(paramParams.id);
        if (producto) {
            return response.send(producto);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }

    @Put('/:id')
    editarUno(@Res () response,
              @Req () request,
              @Param() paramParams,
              @Body(new ProductoPipe(PRODUCTO_SCHEMA)) bodyParams){
        if(this.obtenerUno(response, request, paramParams)) {
            const producto = this._productoService.editarUno(paramParams.id,
                bodyParams.nProducto,
                bodyParams.nombre,
                bodyParams.descripcion,
                bodyParams.precio,
                bodyParams.fechaLanzamiento,
                bodyParams.aniosGarantia,
                bodyParams.tiendaId
            );
            return response.send(producto);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }
}