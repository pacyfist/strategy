import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PageLeadComponent } from '../../components/page-lead/page-lead.component';

@Component({
  selector: 'app-book-page',
  imports: [FaIconComponent, PageTitleComponent, PageLeadComponent],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent {
  readonly faDownload = faDownload;
  readonly loading = signal<boolean>(true);
}
