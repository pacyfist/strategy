import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';

@Component({
  selector: 'app-book-page',
  imports: [FontAwesomeModule, PageTitleComponent, PageTeaserComponent],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent {
  readonly faDownload = faDownload;
  readonly loading = signal<boolean>(true);
}
