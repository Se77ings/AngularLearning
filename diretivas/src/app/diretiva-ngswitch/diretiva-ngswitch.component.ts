import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-diretiva-ngswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrl: './diretiva-ngswitch.component.css'
})
export class DiretivaNgswitchComponent {
  aba:string = 'home';

}
