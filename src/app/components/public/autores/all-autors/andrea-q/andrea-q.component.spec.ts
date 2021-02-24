import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreaQComponent } from './andrea-q.component';

describe('AndreaQComponent', () => {
  let component: AndreaQComponent;
  let fixture: ComponentFixture<AndreaQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndreaQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndreaQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
