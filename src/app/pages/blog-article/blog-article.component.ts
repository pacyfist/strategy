import { Component } from '@angular/core';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageTeaserComponent } from "../../components/page-teaser/page-teaser.component";

@Component({
  selector: 'app-blog-article',
  imports: [PageTitleComponent, PageTeaserComponent],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css',
})
export class BlogArticleComponent {}
