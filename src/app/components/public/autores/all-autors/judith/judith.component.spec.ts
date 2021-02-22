import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudithComponent } from './judith.component';

describe('JudithComponent', () => {
  let component: JudithComponent;
  let fixture: ComponentFixture<JudithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
