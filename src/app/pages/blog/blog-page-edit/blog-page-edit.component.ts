import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { QuillModule } from 'ngx-quill';
import { mergeMap } from 'rxjs';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { BlogService } from '../../../services/blog.service';

@Component({
  imports: [
    PageTitleComponent,
    PageLeadComponent,
    QuillModule,
    FaIconComponent,
  ],
  templateUrl: './blog-page-edit.component.html',
})
export class BlogPageEditComponent {
  readonly faAdd = faAdd;
  readonly faEdit = faEdit;
  readonly faDelete = faTrash;

  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly id = this.route.snapshot.params['id'];

  readonly sections$ = this.blogService.getArticleSections(this.id);
  readonly metadata$ = this.blogService.blogs$.pipe(
    mergeMap((blogs) => blogs.filter((b) => b.id == this.id)),
  );

  readonly sections = toSignal(this.sections$);
  readonly metadata = toSignal(this.metadata$);

  readonly text = signal('');

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button

      ['link', 'image', 'video'], // link and image, video
    ],
  };

  addSection(): void {
    const articleId = this.metadata()?.id;
    const indexes = this.sections()?.map((s) => s.index) ?? [];
    const maxIndex = Math.max(...indexes);

    if (articleId) {
      this.blogService.addArticleSection(articleId, {
        title: '1',
        html: '2',
        index: maxIndex + 1,
      });
    }
  }

  delSection(sectionId: string): void {
    const articleId = this.metadata()?.id;

    if (articleId) {
      this.blogService.delArticleSection(articleId, sectionId);
    }
  }
}
