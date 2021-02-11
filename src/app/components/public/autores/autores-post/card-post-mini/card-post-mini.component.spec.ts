import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostMiniComponent } from './card-post-mini.component';

describe('CardPostMiniComponent', () => {
  let component: CardPostMiniComponent;
  let fixture: ComponentFixture<CardPostMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPostMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
