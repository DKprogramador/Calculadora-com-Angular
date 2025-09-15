import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado!: number;
  
  Soma(){
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }
  Subtracao(){
    this.resultado = this.numero1 - this.numero2;
    return this.resultado;
  }
  Multiplicacao(){
    this.resultado = this.numero1 * this.numero2;
    return this.resultado;
  }
  Divisao(){
    this.resultado = this.numero1 / this.numero2;
    return this.resultado;
  }
}
