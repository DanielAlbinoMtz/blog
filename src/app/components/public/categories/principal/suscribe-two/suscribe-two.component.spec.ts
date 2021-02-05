import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeTwoComponent } from './suscribe-two.component';

describe('SuscribeTwoComponent', () => {
  let component: SuscribeTwoComponent;
  let fixture: ComponentFixture<SuscribeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscribeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscribeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
