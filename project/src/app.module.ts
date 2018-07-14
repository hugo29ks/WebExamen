import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TiendaController} from './tienda/tienda.controller';
import {ProductoController} from "./producto/producto.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {TiendaService} from "./tienda/tienda.service";
import {ProductoService} from "./producto/producto.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {TiendaEntity} from "./tienda/tienda.entity";
import {ProductoEntity} from "./producto/producto.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'examen-montero.mysql.database.azure.com',
      port: 3306,
      username: 'hugo29ks@examen-montero',
      password: 'Hugo-1993',
      database: 'tiendaweb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl :true
  }),
      TypeOrmModule.forFeature([UsuarioEntity, TiendaEntity, ProductoEntity])],
  controllers: [AppController, TiendaController, ProductoController, AutorizacionController, UsuarioController],
  providers: [AppService, TiendaService, ProductoService, UsuarioService],
})
export class AppModule {}
