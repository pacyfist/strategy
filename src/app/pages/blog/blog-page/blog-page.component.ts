import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { QuillViewHTMLComponent } from 'ngx-quill';
import { mergeMap } from 'rxjs';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { BlogService } from '../../../services/blog.service';

@Component({
  imports: [PageTitleComponent, PageLeadComponent, QuillViewHTMLComponent],
  templateUrl: './blog-page.component.html',
})
export class BlogPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly id = this.route.snapshot.params['id'];

  readonly sections$ = this.blogService.getArticleSections(this.id);
  readonly metadata$ = this.blogService.blogs$.pipe(
    mergeMap((blogs) => blogs.filter((b) => b.id == this.id)),
  );

  readonly sections = toSignal(this.sections$);
  readonly metadata = toSignal(this.metadata$);
}
