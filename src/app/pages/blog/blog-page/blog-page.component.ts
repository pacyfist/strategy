import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  imports: [],
  templateUrl: './blog-page.component.html',
})
export class BlogPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly id = this.route.snapshot.params['id'];
}
