import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {TiendaEntity} from "../tienda/tienda.entity";

@Entity('producto')
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    nProducto: number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    descripcion: string;

    @Column('int')
    precio: number;

    @Column({ length: 500 })
    fechaLanzamiento: string;

    @Column('int')
    aniosGarantia: number;

    @Column('int')
    tiendaId: number;

    @ManyToOne(
        type => TiendaEntity,
        tienda => tienda.productos
    )

    tiendas: number;
}