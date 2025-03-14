import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateComponent } from './card-template.component';

describe('CardsTemplateComponent', () => {
  let component: CardTemplateComponent;
  let fixture: ComponentFixture<CardTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTemplateComponent],
    });
    fixture = TestBed.createComponent(CardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
