import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.css'
})
export class DiretivaNgclassComponent {
meuFavorito: boolean = false;

onClick(){
  this.meuFavorito = !this.meuFavorito;
}
}
