import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.css'
})
export class DiretivaNgForComponent {
cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
}
