"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sucursal = /** @class */ (function () {
    function Sucursal(id) {
        this._id = id;
        this._clientes = [];
    }
    Object.defineProperty(Sucursal.prototype, "nuevoCliente", {
        set: function (nuevoCliente) {
            this._clientes.push(nuevoCliente);
        },
        enumerable: true,
        configurable: true
    });
    Sucursal.prototype.obtenerMayorCompra = function () {
    };
    Sucursal.prototype.obtenerCompraCara = function () {
    };
    Sucursal.prototype.existeClientesSinCompras = function () { };
    Sucursal.prototype.existeClientesConUnaCompra = function () { };
    Sucursal.prototype.obtenerTotalGanado = function () {
        var total;
        return total = this._clientes.reduce(function (acum, cliente) { return acum = acum + cliente.totalHistorial; }, 0);
    };
    Sucursal.prototype.obtenerClientesOrdenados = function () { };
    return Sucursal;
}());
exports.Sucursal = Sucursal;
