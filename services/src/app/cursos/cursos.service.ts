import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable() 
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    //ao deixar static, nao precisa instanciar a classe para acessar o metodo
    //e assim que a classe cursos service for instanciada, o método acima foi compartilhado entre todos os objetos instanciados (que possuem a classe cursos service como base)
    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService){
        console.log(this.logService)
        console.log('CursosService');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos')
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        //e ai, para acessar o método criouNovoCurso, basta acessar pela classe CursosService	
        CursosService.criouNovoCurso.emit(curso);
    }
}