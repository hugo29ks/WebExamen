import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TiendaEntity} from "../tienda/tienda.entity";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({ length: 500 })
    usuario: string;

    @Column({ length: 500 })
    password: string;

    @OneToMany(
        type => TiendaEntity,
        tienda => tienda.usuarios
    )

    tiendas: [TiendaEntity];
}