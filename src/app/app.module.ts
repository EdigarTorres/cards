import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsModule } from './cards-module/cards.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
