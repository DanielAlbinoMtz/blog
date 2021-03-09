import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMercadosThreeComponent } from './card-mercados-three.component';

describe('CardMercadosThreeComponent', () => {
  let component: CardMercadosThreeComponent;
  let fixture: ComponentFixture<CardMercadosThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMercadosThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMercadosThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
