"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = /** @class */ (function () {
    function Producto(precioUnitario, descripcion, cantidad) {
        this._precioUnitario = precioUnitario;
        this._descripcion = descripcion;
        this._cantidad = cantidad ? cantidad : 1;
    }
    Object.defineProperty(Producto.prototype, "precioUnitario", {
        get: function () {
            return this._precioUnitario * this._cantidad;
        },
        set: function (precioUnitario) {
            this._precioUnitario = precioUnitario;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "descripcion", {
        get: function () {
            return this._descripcion;
        },
        set: function (desc) {
            this._descripcion = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        set: function (cantidad) {
            this._cantidad = cantidad;
        },
        enumerable: true,
        configurable: true
    });
    Producto.prototype.getprecioTotal = function () {
        return this._precioUnitario * this._cantidad;
    };
    return Producto;
}());
exports.Producto = Producto;
