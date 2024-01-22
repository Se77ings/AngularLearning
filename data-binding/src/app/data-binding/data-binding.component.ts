import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: any = 'String teste, sou uma variavel no arquivo .ts'
  urlImagem: any = 'http://lorempixel.com.br/400/200';
  valorAtual: string = ''
  valorSalvo: any = '0'
  isMouseOver:boolean = false;

  nome:string = 'abc';
  pessoa:any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';
  
  valorInicial: number = 5;

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: any) {
    let element = document.getElementById('valorSalvo');
    if (element) {
      // element.innerHTML = this.valorAtual;
      this.valorSalvo = this.valorAtual;
    }
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
     
  }
  onMudouValor(evento:any){
    console.log(evento);
  }

  deletarCiclo:boolean = false;


  destruirCiclo(){
    this.deletarCiclo = true;}
} 
