import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  // Método que devuelve datos simulados
  getProductsSmall(): Promise<Product[]> {
    return Promise.resolve([
      { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100, imageUrl: 'https://carrefourar.vtexassets.com/arquivos/ids/197068/7793323004482_02.jpg?v=637523691233030000' },
      { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200, imageUrl: 'https://media.istockphoto.com/id/185068940/es/foto/miel-frasco-sobre-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=aS6jaTI8MiczU8BnphVi0HxcTJNcH2PwSFi8293jzRQ=' },
      // Agrega más productos si es necesario
    ]);
  }
}
