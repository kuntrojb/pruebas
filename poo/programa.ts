import { Producto } from "./Producto";
import { Cliente } from "./cliente";



     let producto1=new Producto(1,'lapicera');
     let producto2=new Producto(1,'cuaderno');
     let producto3=new Producto(1,'silla');
     let producto4=new Producto(1,'pc');
     let producto5=new Producto(1,'mochila');

     let cliente1=new Cliente('pepe','asdasd','asdasd',1213123);

     cliente1.agregarProducto(producto1,3);
     cliente1.agregarProducto(producto2,2);
     cliente1.agregarProducto(producto3,10);
     cliente1.agregarProducto(producto4,6);
     cliente1.agregarProducto(producto5,7);

     cliente1.comprar();

     for (let comprasss of cliente1.historial) {
      
        for (let productosss of comprasss.productos) {
            console.log(productosss.descripcion);
        
        }

        console.log(comprasss.total);
        
    }
