import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.scss'],
})
export class CardsTemplateComponent {
  cards = [
    {
      plano: 'Simples',
      preco: 100,
    },
    {
      plano: 'Completo',
      preco: 200,
    },
    {
      plano: 'Max',
      preco: 300,
    },
    {
      plano: 'Simples',
      preco: 100,
    },
    {
      plano: 'Completo',
      preco: 200,
    },
    {
      plano: 'Max',
      preco: 300,
    },
  ];
}
