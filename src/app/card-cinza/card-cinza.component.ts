import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cinza',
  templateUrl: './card-cinza.component.html',
  styleUrls: ['./card-cinza.component.scss'],
})
export class CardCinzaComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
