import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInversionTreeComponent } from './card-inversion-tree.component';

describe('CardInversionTreeComponent', () => {
  let component: CardInversionTreeComponent;
  let fixture: ComponentFixture<CardInversionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInversionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInversionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
