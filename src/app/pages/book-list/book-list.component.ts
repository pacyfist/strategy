import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SearchComponent } from '../../components/search/search.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-page',
  imports: [
    FontAwesomeModule,
    PaginatorComponent,
    SearchComponent,
    DecimalPipe,
    PageTitleComponent,
    PageTeaserComponent,
  ],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  readonly booksService = inject(BooksService);

  readonly faAnglesRight = faAnglesRight;
}
