import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTrendComponent } from './articles-trend.component';

describe('ArticlesTrendComponent', () => {
  let component: ArticlesTrendComponent;
  let fixture: ComponentFixture<ArticlesTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
