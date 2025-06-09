import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAsterisk,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { ChapterTitleComponent } from '../../components/chapter-title/chapter-title.component';

@Component({
  selector: 'app-landing-page',
  imports: [FontAwesomeModule, ChapterTitleComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  /* icons */
  faAsterisk = faAsterisk;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faLink = faLink;
}
