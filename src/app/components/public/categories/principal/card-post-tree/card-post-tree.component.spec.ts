import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostTreeComponent } from './card-post-tree.component';

describe('CardPostTreeComponent', () => {
  let component: CardPostTreeComponent;
  let fixture: ComponentFixture<CardPostTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPostTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
