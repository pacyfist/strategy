import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly faChevronDown = faChevronDown;
  readonly faChevronUp = faChevronUp;
  readonly faBars = faBars;

  readonly platform = inject(PlatformService);

  readonly auth = inject(AuthService);

  readonly collapsed = signal<boolean>(true);
}
