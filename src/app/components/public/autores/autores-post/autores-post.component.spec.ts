import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresPostComponent } from './autores-post.component';

describe('AutoresPostComponent', () => {
  let component: AutoresPostComponent;
  let fixture: ComponentFixture<AutoresPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
