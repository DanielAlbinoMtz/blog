import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInversionComponent } from './card-inversion.component';

describe('CardInversionComponent', () => {
  let component: CardInversionComponent;
  let fixture: ComponentFixture<CardInversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
