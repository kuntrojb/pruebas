import { Cliente } from "./cliente";

export class Sucursal{
    
    private _clientes: Cliente[];
    private _id: string;

    constructor (id: string){
        this._id = id;
        this._clientes= [];
    }

    set nuevoCliente( nuevoCliente: Cliente){
        this._clientes.push(nuevoCliente);

    }

    obtenerMayorCompra(){
        


    }
    obtenerCompraCara(){



    }
    existeClientesSinCompras(){}
    existeClientesConUnaCompra(){}
    obtenerTotalGanado(){
        let total: number;
        return total=this._clientes.reduce((acum,cliente)=>acum = acum + cliente.totalHistorial,0);

    }
    obtenerClientesOrdenados(){}


}
