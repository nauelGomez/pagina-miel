import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCapsuleComponent } from './app-capsule/app-capsule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCapsuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-miel';
}
