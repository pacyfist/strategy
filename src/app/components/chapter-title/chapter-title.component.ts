import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapter-title',
  imports: [FaIconComponent],
  templateUrl: './chapter-title.component.html',
})
export class ChapterTitleComponent {
  readonly faLink = faLink;

  readonly title = input.required<string>();
  readonly anchor = input.required<string>();
  readonly center = input<boolean>(false);
}
