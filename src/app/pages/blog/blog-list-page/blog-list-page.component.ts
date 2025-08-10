import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faAnglesRight,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { PaginatorComponent } from '../../../components/paginator/paginator.component';
import { SearchComponent } from '../../../components/search/search.component';
import { AuthService } from '../../../services/auth.service';
import { BlogService } from '../../../services/blog.service';

@Component({
  imports: [
    RouterLink,
    FaIconComponent,
    PaginatorComponent,
    SearchComponent,
    PageTitleComponent,
    PageLeadComponent,
  ],
  templateUrl: './blog-list-page.component.html',
})
export class BlogListPageComponent {
  readonly authService = inject(AuthService);
  readonly blogService = inject(BlogService);

  readonly faAnglesRight = faAnglesRight;
  readonly faPenToSquare = faPenToSquare;
}
