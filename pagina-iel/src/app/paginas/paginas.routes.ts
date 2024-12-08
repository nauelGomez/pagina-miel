import { Routes } from '@angular/router';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosEsctructComponent } from './productos-esctruct/productos-esctruct.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductViewComponent } from './product-view/product-view.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: InicioComponent, children: 
    [{ path: 'carousel-products', component: CarouselProductsComponent }] },
  { path: 'products-estruct', component: ProductosEsctructComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'contacto-form', component: ContactFormComponent},
  { path: 'producto-vista', component: ProductViewComponent}
];

