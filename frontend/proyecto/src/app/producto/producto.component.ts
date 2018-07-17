import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() productoID: number;
  @Input() productoNombre: string;
  @Input() productoDescripcion: string;
  @Input() productoPrecio: number;
  @Input() productoFechaLanzamiento: string;
  @Input() productoAniosGarantia: number;

  constructor() {
  }

  ngOnInit() {

  }
}
