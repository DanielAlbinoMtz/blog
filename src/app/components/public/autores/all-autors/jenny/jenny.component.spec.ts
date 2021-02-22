import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennyComponent } from './jenny.component';

describe('JennyComponent', () => {
  let component: JennyComponent;
  let fixture: ComponentFixture<JennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
