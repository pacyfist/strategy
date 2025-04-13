import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink, DatePipe, FontAwesomeModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  readonly blogService = inject(BlogService);
  readonly posts = computed(() => this.blogService.posts());

  readonly faAnglesRight = faAnglesRight;
}
