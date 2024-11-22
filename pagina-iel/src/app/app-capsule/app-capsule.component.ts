import {  Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Product } from '../services/product.interface';
import { CarouselProductsComponent } from '../carousel-products/carousel-products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-capsule',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatFormFieldModule, MatIconModule, CommonModule, CarouselProductsComponent, FormsModule],
  templateUrl: './app-capsule.component.html',
  styleUrl: './app-capsule.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppCapsuleComponent implements OnInit {
acc: ((previousValue: Product, currentValue: Product, currentIndex: number, array: Product[]) => Product) | undefined;
  constructor(private renderer: Renderer2) {}
  cartItems: Array<Product & { quantity: number }> = [];
  isCartOpen: boolean = false;
  cartCount: number = 0;
  cartTotal: number = 0;
  postalCode: string = '';

  getProgressPercentage(): number {
    const total = this.calculateTotal();
    return Math.min((total / 1000) * 100, 100);
  }

calculateShipping(): void {
  if (this.postalCode) {
    console.log('Cálculo de envío para el código postal:', this.postalCode);
  }
}
  ngOnInit(): void {

    this.cartItems.push({
      id: 1,
      name: 'Producto de prueba',
      description: 'Descripción del producto',
      price: 200,
      imageUrl: 'https://acdn.mitiendanube.com/stores/002/133/760/products/69b38041-330b-4bc3-8527-2ebdd9d3c2d1-9a61b507b31db1191a16600528361378-640-0.jpeg',
      category: 'Categoría de prueba',
      isAvailable: 'si disponible',
      quantity: 1
    });
  }

  addToCart(product: Product): void {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);
  
    if (existingProduct) {
      
      existingProduct.quantity++;
    } else {
      
      this.cartItems.push({ ...product, quantity: 1 });
    }
  
    this.calculateTotal(); 
  }
  decreaseQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotal(); 
    }
  }
  
 
  increaseQuantity(product: any): void {
    product.quantity++;
    this.calculateTotal(); 
  }
  
  checkout(): void {
    
    console.log('Compra finalizada:', this.cartItems);
  }
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;

    const topBar = document.querySelector('.top-bar');
    const mainBar = document.querySelector('.main-bar');
    const menuItems = document.querySelector('.menu-items');
    const whatsappIcon = document.querySelector('.whatsapp-float');
    const iconButtons = document.querySelectorAll('.icons button');
    const icons = document.querySelectorAll('.icons ion-icon');

    if (scrollPosition > 50) {
      topBar?.classList.add('hidden');
      mainBar?.classList.add('small');
      menuItems?.classList.add('small');
      whatsappIcon?.classList.add('small-wsp');
      
      iconButtons.forEach(button => button.classList.add('small-button'));
      icons.forEach(icon => icon.classList.add('small-icon'));
    } else {
      topBar?.classList.remove('hidden');
      mainBar?.classList.remove('small');
      menuItems?.classList.remove('small');
      whatsappIcon?.classList.remove('small-wsp');
      
      iconButtons.forEach(button => button.classList.remove('small-button'));
      icons.forEach(icon => icon.classList.remove('small-icon'));
    }
  }
}

