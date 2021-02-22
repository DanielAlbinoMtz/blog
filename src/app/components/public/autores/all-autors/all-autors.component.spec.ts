import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAutorsComponent } from './all-autors.component';

describe('AllAutorsComponent', () => {
  let component: AllAutorsComponent;
  let fixture: ComponentFixture<AllAutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
