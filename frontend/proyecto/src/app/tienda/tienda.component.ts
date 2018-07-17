import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  @Input() tiendaNombres: string;
  @Input() tiendaDireccion: string;
  @Input() tiendaFechaApertura: string;
  @Input() tiendaRUC: number;
  @Input() tiendaMatriz: boolean;

  constructor() {
  }

  ngOnInit() {

  }
}
