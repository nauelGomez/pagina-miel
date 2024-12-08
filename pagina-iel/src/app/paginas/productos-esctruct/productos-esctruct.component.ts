import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCapsuleComponent } from '../../estructura/app-capsule/app-capsule.component';



@Component({
  selector: 'app-productos-esctruct',
  standalone: true,
  imports: [CommonModule, FormsModule, AppCapsuleComponent],
  templateUrl: './productos-esctruct.component.html',
  styleUrl: './productos-esctruct.component.css'
})
export class ProductosEsctructComponent {
  quantities = ['350gr', '500gr', '1kg'];
  editions = ['Amante', 'Aventurero', 'Fan'];
  sortOptions = ['Más Vendidos', 'Menor Precio', 'Mayor Precio'];
  selectedSort = 'Más Vendidos';

  products = [
    {
      name: 'Mantequilla de Maní Clásica 350gr',
      price: 4795,
      image: 'assets/images/product1.jpg',
      edition: 'Amante',
      quantity: '350gr'
    },
    {
      name: 'Mantequilla de Almendras Clásica 350gr',
      price: 10500,
      image: 'assets/images/product2.jpg',
      edition: 'Aventurero',
      quantity: '350gr'
    },
    // Agrega más productos según sea necesario
  ];

  filteredProducts = [...this.products];

  toggleFilter(filter: string) {
    // Implementa lógica de filtrado
  }

  addToCart(product: any) {
    alert(`${product.name} agregado al carrito`);
  }
}
