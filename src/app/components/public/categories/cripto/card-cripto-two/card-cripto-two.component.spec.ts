import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCriptoTwoComponent } from './card-cripto-two.component';

describe('CardCriptoTwoComponent', () => {
  let component: CardCriptoTwoComponent;
  let fixture: ComponentFixture<CardCriptoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCriptoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCriptoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
