import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './modules/card.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardModule, BrowserAnimationsModule, MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
