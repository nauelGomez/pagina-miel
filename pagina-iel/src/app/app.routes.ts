import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppCapsuleComponent } from './app-capsule/app-capsule.component';
import { ProductosEsctructComponent } from './productos-esctruct/productos-esctruct.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'app-component', component: AppComponent },
  { path: 'productos', component: ProductosEsctructComponent },
  { path: '**', redirectTo: '' } 
];
