import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCriptoThreeComponent } from './card-cripto-three.component';

describe('CardCriptoThreeComponent', () => {
  let component: CardCriptoThreeComponent;
  let fixture: ComponentFixture<CardCriptoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCriptoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCriptoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
