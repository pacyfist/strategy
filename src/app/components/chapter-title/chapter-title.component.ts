import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapter-title',
  imports: [FontAwesomeModule],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.css',
})
export class ChapterTitleComponent {
  readonly faLink = faLink;

  readonly title = input.required<string>();
  readonly anchor = input.required<string>();
}
