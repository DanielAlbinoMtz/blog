import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmprenderTwoComponent } from './card-emprender-two.component';

describe('CardEmprenderTwoComponent', () => {
  let component: CardEmprenderTwoComponent;
  let fixture: ComponentFixture<CardEmprenderTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmprenderTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmprenderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
