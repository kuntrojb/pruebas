export class Producto {
    private _precioUnitario: number;
    private _descripcion: string;
    private _cantidad: number;

    constructor(precioUnitario: number, descripcion: string, cantidad?: number) {
        this._precioUnitario = precioUnitario;
        this._descripcion = descripcion;
        this._cantidad = cantidad ? cantidad : 1;
    }

    get precioUnitario() {
        return this._precioUnitario * this._cantidad;
    }

    get descripcion(){
        return this._descripcion;

    }
    get cantidad(){
        return this._cantidad;

    }
    set precioUnitario(precioUnitario: number) {
        this._precioUnitario = precioUnitario;  
    }
    set descripcion(desc: string) {
        this._descripcion = desc;  
    }
    set cantidad(cantidad: number) {
        this._cantidad = cantidad;  
    }

    getprecioTotal(){
        
        return this._precioUnitario*this._cantidad ;
    }
}