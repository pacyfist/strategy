import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from '../../services/blog.service';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink, DatePipe, FontAwesomeModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly pageNumber = signal<number>(0);
  readonly pageSize = signal<number>(4);

  readonly pageStart = computed(() => this.pageNumber() * this.pageSize());
  readonly pageEnd = computed(() => this.pageStart() + this.pageSize());

  readonly posts = computed(() => this.blogService.posts());

  readonly pageCount = computed(() =>
    Math.ceil(this.posts().length / this.pageSize()),
  );
  readonly pageNumbers = computed(() => [...Array(this.pageCount()).keys()]);

  readonly page = computed(() =>
    this.posts().slice(this.pageStart(), this.pageEnd()),
  );

  readonly faAnglesRight = faAnglesRight;
}
