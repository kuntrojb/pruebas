"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Compras = /** @class */ (function () {
    function Compras(producto, total) {
        this._total = total;
        this._productos = producto;
        this._fecha = new Date;
    }
    Object.defineProperty(Compras.prototype, "productos", {
        get: function () {
            return this._productos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Compras.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: true,
        configurable: true
    });
    return Compras;
}());
exports.Compras = Compras;
