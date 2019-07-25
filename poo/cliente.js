"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Compras_1 = require("./Compras");
var Cliente = /** @class */ (function () {
    function Cliente(nombre, domicilio, email, dinero) {
        this._nombre = nombre;
        this._domicilio = domicilio;
        this._email = email;
        this._dinero = dinero;
        this._carrito = [];
        this._historialDeCompra = [];
    }
    Cliente.prototype.comprar = function () {
        var total = this._carrito.reduce(function (acum, producto) { return acum = acum + producto.getprecioTotal(); }, 0);
        if (this._dinero < total) {
            return console.log("Dinero insuficiente");
        }
        else {
            this._dinero = this._dinero - total;
            var nuevaCompra = new Compras_1.Compras(this._carrito, total);
            this._historialDeCompra.push(nuevaCompra);
            console.log("transaccion realizada");
        }
    };
    Cliente.prototype.agregarProducto = function (producto, cant) {
        if (cant) {
            producto.cantidad = cant;
        }
        this._carrito.push(producto);
    };
    Object.defineProperty(Cliente.prototype, "carrito", {
        get: function () {
            return this._carrito;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "historial", {
        get: function () {
            return this._historialDeCompra;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "totalHistorial", {
        get: function () {
            var total;
            return total = this._historialDeCompra.reduce(function (acum, compras) { return acum = acum + compras.total; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    return Cliente;
}());
exports.Cliente = Cliente;
