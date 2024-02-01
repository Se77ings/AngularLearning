import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-diretiva-ngif',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './diretiva-ngif.component.html',
    styleUrl: './diretiva-ngif.component.css'
    
})
export class DiretivaNgifComponent {
    cursos: string[] = ['opa'];
    mostrarCursos: boolean = false;

    mostraOcultaCursos(){
        this.mostrarCursos = !this.mostrarCursos;
    }
}
