import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepConversationComponent } from './keep-conversation.component';

describe('KeepConversationComponent', () => {
  let component: KeepConversationComponent;
  let fixture: ComponentFixture<KeepConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
