import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCapsuleComponent } from './app-capsule/app-capsule.component';
import { CommonModule } from '@angular/common';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppCapsuleComponent, RouterOutlet, CommonModule, CarouselProductsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent  {
  title = 'pagina miel';
  
}
