import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleComponent } from './blog-article.component';

describe('BlogArticleComponent', () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
