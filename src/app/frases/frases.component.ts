import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {

  ocultar = true;
  //@Input() ocultar: Boolean = true;
    frases = ['A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.'
    ];

  ExibirMensagem(){
    return this.frases[Math.floor(Math.random()*this.frases.length)];
  }
}
