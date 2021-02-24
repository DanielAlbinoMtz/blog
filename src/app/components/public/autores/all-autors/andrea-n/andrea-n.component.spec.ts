import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreaNComponent } from './andrea-n.component';

describe('AndreaNComponent', () => {
  let component: AndreaNComponent;
  let fixture: ComponentFixture<AndreaNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndreaNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndreaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
