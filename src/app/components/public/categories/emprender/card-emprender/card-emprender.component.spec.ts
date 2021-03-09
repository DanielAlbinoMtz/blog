import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmprenderComponent } from './card-emprender.component';

describe('CardEmprenderComponent', () => {
  let component: CardEmprenderComponent;
  let fixture: ComponentFixture<CardEmprenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmprenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
