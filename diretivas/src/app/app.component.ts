import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DiretivaNgifComponent } from "./diretiva-ngif/diretiva-ngif.component";
import { DiretivaNgswitchComponent } from "./diretiva-ngswitch/diretiva-ngswitch.component"
import { DiretivaNgForComponent } from "./diretiva-ng-for/diretiva-ng-for.component"
import { DiretivaNgclassComponent } from "./diretiva-ngclass/diretiva-ngclass.component"
import { DiretivaNgstyleComponent } from "./diretiva-ngstyle/diretiva-ngstyle.component"
import { OperadorElvisComponent } from "./operador-elvis/operador-elvis.component"
import { DiretivaNgcontentComponent } from "./diretiva-ngcontent/diretiva-ngcontent.component"
import { DiretivasCustomizadasComponent } from "./diretivas-customizadas/diretivas-customizadas.component"

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, DiretivaNgifComponent, DiretivaNgswitchComponent, DiretivaNgForComponent, DiretivaNgclassComponent, DiretivaNgstyleComponent, OperadorElvisComponent, DiretivaNgcontentComponent, DiretivasCustomizadasComponent]
})
export class AppComponent {
  title = 'diretivas';

  ocultaExibeDiv(div: HTMLDivElement) {
    div.style.display = div.style.display == 'none' ? 'block' : 'none';
  }

}
