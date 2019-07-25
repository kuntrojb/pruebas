"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto_1 = require("./Producto");
var cliente_1 = require("./cliente");
var producto1 = new Producto_1.Producto(1, 'lapicera');
var producto2 = new Producto_1.Producto(1, 'cuaderno');
var producto3 = new Producto_1.Producto(1, 'silla');
var producto4 = new Producto_1.Producto(1, 'pc');
var producto5 = new Producto_1.Producto(1, 'mochila');
var cliente1 = new cliente_1.Cliente('pepe', 'asdasd', 'asdasd', 1213123);
cliente1.agregarProducto(producto1, 3);
cliente1.agregarProducto(producto2, 2);
cliente1.agregarProducto(producto3, 10);
cliente1.agregarProducto(producto4, 6);
cliente1.agregarProducto(producto5, 7);
cliente1.comprar();
for (var _i = 0, _a = cliente1.historial; _i < _a.length; _i++) {
    var comprasss = _a[_i];
    for (var _b = 0, _c = comprasss.productos; _b < _c.length; _b++) {
        var productosss = _c[_b];
        console.log(productosss.descripcion);
    }
    console.log(comprasss.total);
}
