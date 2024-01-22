import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DiretivaNgifComponent } from "./diretiva-ngif/diretiva-ngif.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, DiretivaNgifComponent]
})
export class AppComponent {
  title = 'diretivas';
}
