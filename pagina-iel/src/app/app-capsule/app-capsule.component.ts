import {  Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-capsule',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatFormFieldModule, MatIconModule, CommonModule],
  templateUrl: './app-capsule.component.html',
  styleUrl: './app-capsule.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppCapsuleComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  cartCount: number = 0;
  ngOnInit(): void {}
  addToCart(): void {
    this.cartCount++;
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;

    // Elementos que deseas cambiar
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

