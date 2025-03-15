import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { CardTemplateComponent } from '../card-template/card-template.component';
import { CardPlanComponent } from '../card-plan/card-plan.component';
import { CardPriceComponent } from '../card-price/card-price.component';

@NgModule({
  declarations: [
    CardPlanComponent,
    CardPriceComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
    CardTemplateComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [
    CardPlanComponent,
    CardPriceComponent,
    CardButtonCancelComponent,
    CardButtonComponent,
    CardTemplateComponent,
  ],
})
export class CardModule {}
