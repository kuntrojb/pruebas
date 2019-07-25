import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TipoDocumento{

   @PrimaryGeneratedColumn() 
    idTipoDocumento:number;
    
   @Column() 
     descripcion:string;
}