import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/servicio productos/product.service';
import { RootObject } from '../../services/servicio productos/product.interface';



@Component({
  selector: 'app-productos-esctruct',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos-esctruct.component.html',
  styleUrl: './productos-esctruct.component.css'
})
export class ProductosEsctructComponent {
products: RootObject[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void{
    this.service.getProductsList().subscribe((data) => {
      this.products = data;
    });
  }
  
}
