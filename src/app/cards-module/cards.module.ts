import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardCinzaComponent } from '../card-cinza/card-cinza.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardCinzaComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [CardCinzaComponent, CardRoxoComponent, CardButtonCancelComponent],
})
export class CardsModule {}
