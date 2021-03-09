import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMercadosComponent } from './card-mercados.component';

describe('CardMercadosComponent', () => {
  let component: CardMercadosComponent;
  let fixture: ComponentFixture<CardMercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
