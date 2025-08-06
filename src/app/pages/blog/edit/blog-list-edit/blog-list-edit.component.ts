import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLeadComponent } from '../../../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../../../components/page-title/page-title.component';
import { BlogEditService } from '../../../../services/blog-edit.service';
import { BlogService } from '../../../../services/blog.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageService } from '../../../../services/image.service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [
    PageTitleComponent,
    PageLeadComponent,
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './blog-list-edit.component.html',
})
export class BlogListEditComponent {
  readonly blogService = inject(BlogService);
  readonly blogEditService = inject(BlogEditService);
  readonly imageService = inject(ImageService);

  readonly form = new FormGroup({
    path: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    lead: new FormControl('', Validators.required),
  });

  readonly images = this.imageService.blogImagesResource.value;

  uploadFile(input: HTMLInputElement) {
    if (input.files) {
      this.imageService.uploadBlogImage(input.files);
    }
  }

  async addArticle() {
    const id = crypto.randomUUID();
    await this.blogEditService.addArticle(
      id,
      {
        lang: 'pl',
        path: this.form.value.path ?? '',
        title: this.form.value.title ?? '',
        lead: this.form.value.lead ?? '',
      },
      { html: '' },
    );
  }

  async delArticle(id: string) {
    await this.blogEditService.delArticle(id);
  }
}
