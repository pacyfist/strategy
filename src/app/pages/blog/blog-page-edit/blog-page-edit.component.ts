import { Component, inject, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { QuillModule } from 'ngx-quill';
import { mergeMap } from 'rxjs';
import { PageLeadComponent } from '../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  imports: [
    PageTitleComponent,
    PageLeadComponent,
    QuillModule,
    FaIconComponent,
    FormsModule,
  ],
  templateUrl: './blog-page-edit.component.html',
})
export class BlogPageEditComponent {
  readonly faAdd = faAdd;
  readonly faEdit = faEdit;
  readonly faDelete = faTrash;

  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly blogService = inject(BlogService);
  readonly auth = inject(AuthService);

  readonly id = this.route.snapshot.params['id'];

  readonly sections$ = this.blogService.getArticleSections(this.id);
  readonly metadata$ = this.blogService.blogs$.pipe(
    mergeMap((blogs) => blogs.filter((b) => b.id == this.id)),
  );

  readonly sections = toSignal(this.sections$);
  readonly metadata = toSignal(this.metadata$);

  readonly editSectionId = signal<string>('');

  readonly editSectionHtml = linkedSignal(
    () => this.sections()?.find((s) => s.id == this.editSectionId())?.html,
  );

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

  constructor() {
    this.auth.user$.subscribe((u) => {
      const articleId = this.route.snapshot.params['id'];
      if (!u?.isAdmin) {
        this.router.navigateByUrl(`/blog/${articleId}`);
      }
    });
  }

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
