import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnetteComponent } from './anette.component';

describe('AnetteComponent', () => {
  let component: AnetteComponent;
  let fixture: ComponentFixture<AnetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
