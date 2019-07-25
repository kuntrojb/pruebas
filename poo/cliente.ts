import { Producto } from "./Producto";
import {Compras} from './Compras';

export class Cliente {
    private _nombre: string;
    private _domicilio: string;
    private _email: string;
    private _dinero: number;
    private _carrito: Producto[];
    private _historialDeCompra:Compras[];

    constructor(nombre: string, domicilio: string, email: string,dinero:number) {
        this._nombre = nombre;
        this._domicilio = domicilio;
        this._email = email;
        this._dinero = dinero;
        this._carrito=[];
        this._historialDeCompra = [];
    }

    comprar() {

        let total=this._carrito.reduce((acum,producto)=>acum = acum + producto.getprecioTotal(),0);


        if (this._dinero < total) {
            return console.log("Dinero insuficiente");
        } else {
            this._dinero = this._dinero - total;


            let nuevaCompra=new Compras(this._carrito,total);
            this._historialDeCompra.push(nuevaCompra);

             console.log("transaccion realizada");
        }

    }

    agregarProducto(producto: Producto, cant?: number) {

        if (cant){
            producto.cantidad = cant;
           
        }

        this._carrito.push(producto);
    }

    get carrito():Producto[]{
        return this._carrito;
    }

    get historial():Compras[]{
        return this._historialDeCompra;

    }

    get totalHistorial():number{

        let total: number;
        return total=this._historialDeCompra.reduce((acum,compras)=>acum = acum + compras.total,0);


    }
}