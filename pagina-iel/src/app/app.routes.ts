import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppCapsuleComponent } from './app-capsule/app-capsule.component';

export const routes: Routes = [
  { path: '', component: AppCapsuleComponent },
  { path: 'otra-ruta', component: AppComponent },
  { path: '**', redirectTo: '' } 
];
