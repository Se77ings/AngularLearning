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
  valorSalvo: any = ''

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
} 
