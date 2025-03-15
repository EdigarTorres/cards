import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanComponent } from './card-plan.component';

describe('CardPlanComponent', () => {
  let component: CardPlanComponent;
  let fixture: ComponentFixture<CardPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlanComponent]
    });
    fixture = TestBed.createComponent(CardPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
