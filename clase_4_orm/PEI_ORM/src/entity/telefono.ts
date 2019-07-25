import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Telefono{
    @PrimaryGeneratedColumn()
    idTelefono:number;
   @Column() 
    idPersona:number;
   @Column() 
    numero:number;
}