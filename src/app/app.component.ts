import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PW3-INTRODUCAO';

  biscoito = "assets/biscoito.png";
  biscoitoAberto = "assets/biscoito-aberto.png"
  ocultar = true
  frases = ['A vida trará coisas boas se tiver paciência.',
           'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
           'Não compense na ira o que lhe falta na razão.',
           'Defeitos e virtudes são apenas dois lados da mesma moeda.',
           'A maior de todas as torres começa no solo.'
           ];



  ExibirBiscoito(){
      this.biscoito = this.biscoitoAberto;
      this.ocultar = !this.ocultar;
      this.button = false
  }
  ExibirMensagem(){
    return this.frases[Math.floor(Math.random()*this.frases.length)];
  }

  //random = Math.floor(Math.random() * months.length);
  //console.log(random, months[random]);


  ObterAlerta(){
    alert("Hoje é terça-feira");
  }
button = false


}
