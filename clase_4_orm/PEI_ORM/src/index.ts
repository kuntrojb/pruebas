import "reflect-metadata";
import { createConnection } from "typeorm";

import { Telefono } from "./entity/telefono";




createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    
    const telefonos = new Telefono();

    telefonos.idPersona = 4;
    telefonos.numero = 1123;


    await connection.manager.save(telefonos);
    console.log("Saved a new user with id: " + telefonos.idTelefono);


}).catch(error => console.log(error));