import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { QuillModule } from 'ngx-quill';
import { PageLeadComponent } from '../../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../../components/page-title/page-title.component';
import { AuthService } from '../../../../services/auth.service';
import { BlogService } from '../../../../services/blog.service';
import { BlogEditService } from '../../../../services/blog-edit.service';
import { from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [
    PageTitleComponent,
    PageLeadComponent,
    QuillModule,
    ReactiveFormsModule,
  ],
  templateUrl: './blog-page-edit.component.html',
})
export class BlogPageEditComponent implements OnInit {
  readonly faAdd = faAdd;
  readonly faEdit = faEdit;
  readonly faDelete = faTrash;

  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly auth = inject(AuthService);

  readonly blogService = inject(BlogService);
  readonly blogEditService = inject(BlogEditService);

  readonly form = new FormGroup({
    path: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    lead: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required),
  });

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

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const article = await this.blogEditService.getArticleById(id);

    this.form.patchValue({ ...article.article, ...article.data });
  }
}
