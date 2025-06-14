import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SearchComponent } from '../../components/search/search.component';
import { BlogService } from '../../services/blog.service';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';

@Component({
  selector: 'app-blog-page',
  imports: [
    RouterLink,
    DatePipe,
    FontAwesomeModule,
    PaginatorComponent,
    SearchComponent,
    PageTitleComponent,
    PageTeaserComponent,
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly faAnglesRight = faAnglesRight;
}
