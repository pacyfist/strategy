import { Component, computed, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-books-page',
  imports: [RouterLink, DatePipe, FontAwesomeModule],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css',
})
export class BooksPageComponent {
  readonly blogService = inject(BlogService);
  readonly posts = computed(() => this.blogService.posts());

  readonly faAnglesRight = faAnglesRight;
}
