import {
  Component,
  input
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { InViewClassDirective } from '../../directives/in-view-class.directive';

@Component({
  selector: 'app-chapter-title',
  imports: [FontAwesomeModule, InViewClassDirective],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.css',
})
export class ChapterTitleComponent {
  readonly faLink = faLink;

  readonly title = input.required<string>();
  readonly anchor = input.required<string>();
}
