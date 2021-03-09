import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInversionTwoComponent } from './card-inversion-two.component';

describe('CardInversionTwoComponent', () => {
  let component: CardInversionTwoComponent;
  let fixture: ComponentFixture<CardInversionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInversionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInversionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
