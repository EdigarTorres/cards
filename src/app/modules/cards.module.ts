import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { CardsTemplateComponent } from '../cards-template/cards-template.component';

@NgModule({
  declarations: [
    CardButtonComponent,
    CardButtonCancelComponent,
    CardsTemplateComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [
    CardButtonCancelComponent,
    CardButtonComponent,
    CardsTemplateComponent,
  ],
})
export class CardsModule {}
