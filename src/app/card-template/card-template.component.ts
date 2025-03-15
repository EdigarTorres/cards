import { Component } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent {
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
