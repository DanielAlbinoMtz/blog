import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMercadosTwoComponent } from './card-mercados-two.component';

describe('CardMercadosTwoComponent', () => {
  let component: CardMercadosTwoComponent;
  let fixture: ComponentFixture<CardMercadosTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMercadosTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMercadosTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
