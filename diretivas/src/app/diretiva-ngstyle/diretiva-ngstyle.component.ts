import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.css'
})
export class DiretivaNgstyleComponent {
  ativo: boolean = false;
  tamanhoFonte: number = 16;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
}
