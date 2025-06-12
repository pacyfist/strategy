import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SearchComponent } from '../../components/search/search.component';
import { BooksService } from '../../services/books.service';
import { DecimalPipe } from '@angular/common';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageTeaserComponent } from "../../components/page-teaser/page-teaser.component";

@Component({
  selector: 'app-books-page',
  imports: [
    FontAwesomeModule,
    PaginatorComponent,
    SearchComponent,
    DecimalPipe,
    PageTitleComponent,
    PageTeaserComponent
],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css',
})
export class BooksPageComponent {
  readonly booksService = inject(BooksService);

  readonly faAnglesRight = faAnglesRight;
}
