import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../producto/producto.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('tienda')
export class TiendaEntity {
    @PrimaryGeneratedColumn()
    idTienda: number;

    @Column({ length: 500 })
    nombres: string;

    @Column({ length: 500 })
    direccion: string;

    @Column({ length: 10 })
    fechaApertura: string;

    @Column('int')
    RUC: number;

    @Column()
    matriz: boolean;

    @OneToMany(
        type => ProductoEntity,
        producto => producto.tiendas
    )

    productos: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.tiendas
    )

    usuarios: number;
}