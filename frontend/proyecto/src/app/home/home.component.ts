import {Component, OnInit} from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";
import {TiendaServicio} from "../servicios/tienda.servicio";
import {ProductoServicio} from "../servicios/producto.servicio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsuarioServicio, TiendaServicio, ProductoServicio]
})
export class HomeComponent implements OnInit {

  nombreBuscar;

  usuarios = [];
  itemsUsuarios = 4;
  paginasUsuarios;
  usuariosMostrar;
  paginaActualUsuario: number = 1;

  tiendas = [];
  itemsTiendas = 2;
  paginasTiendas;
  tiendasMostrar;
  paginaActualTienda: number = 1;

  productos = [];
  itemsProductos = 4;
  paginasProductos;
  productosMostrar;
  paginaActualProducto: number = 1;

  constructor(private _usuarioServicio: UsuarioServicio,
              private _tiendaServicio: TiendaServicio,
              private _productoServicio: ProductoServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarios().subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    )

    this._tiendaServicio.getTiendas().subscribe(
      (result: any[]) => {
        this.tiendas = result;
        this.paginasTiendas = this.numeroPaginas(this.tiendas, this.itemsTiendas);
        this.tiendasMostrar = this.datosVisualizar(this.tiendas, this.paginaActualTienda, this.itemsTiendas);
      }
    )

    this._productoServicio.getProductos().subscribe(
      (result: any[]) => {
        this.productos = result;
        this.paginasProductos = this.numeroPaginas(this.productos, this.itemsProductos);
        this.productosMostrar = this.datosVisualizar(this.productos, this.paginaActualProducto, this.itemsProductos);
      }
    )
  }

  buscar() {
    this._usuarioServicio.getUsuarioBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    );

    this._tiendaServicio.getTiendaBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.tiendas = result;
        this.paginasTiendas = this.numeroPaginas(this.tiendas, this.itemsTiendas);
        this.tiendasMostrar = this.datosVisualizar(this.tiendas, this.paginaActualTienda, this.itemsTiendas);
      }
    );

    this._productoServicio.getProductoBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.productos = result;
        this.paginasProductos = this.numeroPaginas(this.productos, this.itemsProductos);
        this.productosMostrar = this.datosVisualizar(this.productos, this.paginaActualProducto, this.itemsProductos);
      }
    );
  }

  numeroPaginas(lista: any[], items): number {
    let paginas = lista.length/items;
    if(!Number.isInteger(paginas)) {
      paginas = paginas + 1;
      paginas = Number.parseInt(paginas.toString());
    }
    return paginas;
  }

  datosVisualizar(lista: any[], paginaActual, items): any [] {
    let usuariosMostrar = lista.slice(paginaActual*items - items, paginaActual*items);
    return usuariosMostrar;
  }

  siguienteUsuario() {
    this.paginaActualUsuario += 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  anteriorUsuario() {
    this.paginaActualUsuario -= 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  siguienteTienda() {
    this.paginaActualTienda += 1;
    this.tiendasMostrar = this.datosVisualizar(this.tiendas, this.paginaActualTienda, this.itemsTiendas)
  }

  anteriorAutor() {
    this.paginaActualTienda -= 1;
    this.tiendasMostrar = this.datosVisualizar(this.tiendas, this.paginaActualTienda, this.itemsTiendas)
  }

  siguienteLibro() {
    this.paginaActualProducto += 1;
    this.productosMostrar = this.datosVisualizar(this.productos, this.paginaActualProducto, this.itemsProductos)
  }

  anteriorLibro() {
    this.paginaActualProducto -= 1;
    this.productosMostrar = this.datosVisualizar(this.productos, this.paginaActualProducto, this.itemsProductos)
  }
}
