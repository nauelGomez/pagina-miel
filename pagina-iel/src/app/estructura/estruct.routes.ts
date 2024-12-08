import { Routes } from '@angular/router';
import { AppCapsuleComponent } from './app-capsule/app-capsule.component';
import { FooterComponent } from './footer/footer.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: AppCapsuleComponent, children: [
    { path: 'footer', component: FooterComponent }]},
  
];

