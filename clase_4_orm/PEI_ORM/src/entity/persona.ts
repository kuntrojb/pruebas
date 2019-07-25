import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idPersona: number;

    @Column()
    nombre: string;

    @Column()
	apellido: string;
    

    @Column()
    age: number;

    @Column()
    idTipoDocumento: number;

    @Column()
    numeroDocumento: number;
}
