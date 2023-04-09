import { Component, Input, OnInit } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {


  biscoito = "assets/biscoito.png";
  biscoitoAberto = "assets/biscoito-aberto.png";
  @Input() biscoitoAbra: Boolean = true;
  Abrir = true;

  //constructor(private frases: FrasesComponent) {}

  AbrirBiscoito(){
    this.biscoito = this.biscoitoAberto;
    this.Abrir = !this.Abrir;
    //this.frases.ocultar = false;
  }



}
