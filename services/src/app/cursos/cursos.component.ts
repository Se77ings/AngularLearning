import { Component } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: '../app.component.css'
})
export class CursosComponent {
  // cursos: string[] = ['Angular 2', 'Python', 'Java', 'C#' ]
  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {//instanciando o serviço (coisa que nao precisa fazer no static)
    // this.cursosService = new CursosService();
  }

  // boas práticas: sempre que buscar dados com services, utilizar um hook de inicialização
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      //recebe o curso atraves desse emitter static (o qual nao precisa ser inicializado para ser acessado)
      //e adiciona à lista inicial que está sendo exibida no browser
     curso => this.cursos.push(curso)
    );
  }
}
