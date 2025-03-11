import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCinzaComponent } from './card-cinza.component';

describe('CardComponent', () => {
  let component: CardCinzaComponent;
  let fixture: ComponentFixture<CardCinzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCinzaComponent],
    });
    fixture = TestBed.createComponent(CardCinzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
