import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {
  livro:any = {
    titulo: 'aprendendo angular',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqfjz'

  }
  livros:string[] =  ['Java', 'Angular 2']
  filtro:string = ''

  filtroImpuro:string = ''


  addCurso(valor:string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCurso(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter(
      (v:string) => {
        if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
          return true;
        }
        return false;
      }
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'), 2000)
  })

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor Asíncrono 2'));

  constructor () {}

  ngOnInit(){}
}

