import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly faChevronDown: IconDefinition = faChevronDown;
  readonly faChevronUp: IconDefinition = faChevronUp;

  readonly collapsed = signal<boolean>(true);
}
