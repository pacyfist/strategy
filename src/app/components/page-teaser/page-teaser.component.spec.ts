import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeaserComponent } from './page-teaser.component';

describe('PageTeaserComponent', () => {
  let component: PageTeaserComponent;
  let fixture: ComponentFixture<PageTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTeaserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
