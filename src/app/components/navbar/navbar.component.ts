import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly faChevronDown: IconDefinition = faChevronDown;
  readonly faChevronUp: IconDefinition = faChevronUp;

  readonly platform = inject(PLATFORM_ID);
  readonly isPlatformBrowser = isPlatformBrowser(this.platform);

  readonly auth = inject(AuthService);

  readonly collapsed = signal<boolean>(true);
}
