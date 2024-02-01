import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.css'
})
export class ReceberCursoCriadoComponent {

  
  constructor(private cursoService: CursosService) { 
    
  }
  
  curso:string = '';
  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    );
  }
}
