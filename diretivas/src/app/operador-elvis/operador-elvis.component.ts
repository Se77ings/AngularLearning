import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
  tarefa:any = {
    desc: 'Descrição da tarefa',
    responsavel: null,
    usuario: {
      nome: null
    }
  }
}
