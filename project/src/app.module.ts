import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TiendaController} from './tienda/tienda.controller';
import {ProductoController} from "./producto/producto.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {TiendaService} from "./tienda/tienda.service";
import {ProductoService} from "./producto/producto.service";

@Module({
  imports: [],
  controllers: [AppController, TiendaController, ProductoController, AutorizacionController],
  providers: [AppService, TiendaService, ProductoService],
})
export class AppModule {}
