import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { PaginatorComponent } from '../../../components/paginator/paginator.component';
import { SearchComponent } from '../../../components/search/search.component';
import { BlogService } from '../../../services/blog.service';

@Component({
  imports: [
    RouterLink,
    DatePipe,
    FontAwesomeModule,
    PaginatorComponent,
    SearchComponent,
    PageTitleComponent,
    PageLeadComponent,
  ],
  templateUrl: './blog-list-page.component.html',
})
export class BlogListPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly faAnglesRight = faAnglesRight;
}
