import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { BlogService } from '../../../services/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, PageTitleComponent, PageLeadComponent],
  templateUrl: './blog-list-edit.component.html',
})
export class BlogListEditComponent {
  readonly blogService = inject(BlogService);
}
