import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';

@Component({
  imports: [RouterLink, FaIconComponent],
  templateUrl: './logout-page.component.html',
})
export class LogoutPageComponent {
  readonly platform = inject(PLATFORM_ID);
  readonly isPlatformBrowser = isPlatformBrowser(this.platform);

  readonly faHouse = faHouse;
  readonly faRightFromBracket = faRightFromBracket;

  readonly auth = inject(AuthService);
  readonly router = inject(Router);

  async signOut() {
    await this.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
