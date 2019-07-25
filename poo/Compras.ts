import { Producto } from "./Producto";

export class Compras {
    private _productos: Producto[];
    private _fecha: Date;
    private _total: number;

    constructor(producto: Producto[], total: number) {

        this._total = total;
        this._productos = producto;
        this._fecha = new Date;
    }

    get productos():Producto[] {
        return this._productos;
    }

    get total():number{
        return this._total;
    }


}