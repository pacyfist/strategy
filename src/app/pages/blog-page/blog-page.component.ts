import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from '../../services/blog.service';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink, DatePipe, FontAwesomeModule, PaginatorComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly blogService = inject(BlogService);

  readonly faAnglesRight = faAnglesRight;
}
