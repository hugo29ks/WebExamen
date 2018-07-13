import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {TiendaEntity} from "../tienda/tienda.entity";

@Entity('producto')
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    idProducto: number;

    @Column('int')
    numeroProductos: number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    descripcion: string;

    @Column('int')
    precio: number;

    @Column({ length: 10 })
    fechaLanzamiento: string;

    @Column('int')
    aniosGarantia: number;

    @ManyToOne(
        type => TiendaEntity,
        tienda => tienda.productos
    )

    tiendas: TiendaEntity;
}