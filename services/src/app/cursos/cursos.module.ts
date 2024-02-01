import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';
import { CriarCursoModule } from '../criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CriarCursoModule
  ],
  exports: [CursosComponent],
//   providers: [CursosService]
})
export class CursosModule { }