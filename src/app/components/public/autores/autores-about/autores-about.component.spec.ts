import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresAboutComponent } from './autores-about.component';

describe('AutoresAboutComponent', () => {
  let component: AutoresAboutComponent;
  let fixture: ComponentFixture<AutoresAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
