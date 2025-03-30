import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAsterisk,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  imports: [FontAwesomeModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  /* icons */
  faAsterisk = faAsterisk;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
}
