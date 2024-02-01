import { Component, OnInit} from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { CommonModule } from '@angular/common';
import { NgElseDirective } from '../shared/ng-else.directive';


@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightMouseDirective, HighlightDirective, CommonModule, NgElseDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {
  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
  mostrarCursos: boolean = false;
  mostraOcultaCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
