import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SearchComponent } from '../../components/search/search.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-page',
  imports: [
    FontAwesomeModule,
    PaginatorComponent,
    SearchComponent,
  ],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css',
})
export class BooksPageComponent {
  readonly booksService = inject(BooksService);

  readonly faAnglesRight = faAnglesRight;
}
