import { Routes } from '@angular/router';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosEsctructComponent } from './productos-esctruct/productos-esctruct.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '', component: InicioComponent, children: [{
      path: 'carousel-products', component: CarouselProductsComponent
    },
    { path: 'products-estruct', component: ProductosEsctructComponent }]
  }
];

