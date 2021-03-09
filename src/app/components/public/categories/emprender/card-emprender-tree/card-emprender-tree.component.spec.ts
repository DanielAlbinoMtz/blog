import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmprenderTreeComponent } from './card-emprender-tree.component';

describe('CardEmprenderTreeComponent', () => {
  let component: CardEmprenderTreeComponent;
  let fixture: ComponentFixture<CardEmprenderTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmprenderTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmprenderTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
