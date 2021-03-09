import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostTwoComponent } from './card-post-two.component';

describe('CardPostTwoComponent', () => {
  let component: CardPostTwoComponent;
  let fixture: ComponentFixture<CardPostTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPostTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
