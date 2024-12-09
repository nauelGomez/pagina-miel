import { Component, Input, input } from '@angular/core';
import { RootObject } from '../../services/servicio productos/product.interface';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIconModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() productoInfo!: RootObject;
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/placeholder.png';
  }
}
