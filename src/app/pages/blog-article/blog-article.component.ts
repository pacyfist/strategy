import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { BlogService } from '../../services/blog.service';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-blog-article',
  imports: [PageTitleComponent, PageTeaserComponent, AsyncPipe],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css',
})
export class BlogArticleComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly id = this.route.snapshot.params['id'];
  readonly sections$ = this.blogService.getArticleSections(this.id);
  readonly metadata$ = this.blogService.blogs$.pipe(
    mergeMap(blogs => blogs.filter(b=>b.id == this.id)),
  )
}
