import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeannetteComponent } from './jeannette.component';

describe('JeannetteComponent', () => {
  let component: JeannetteComponent;
  let fixture: ComponentFixture<JeannetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeannetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeannetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
