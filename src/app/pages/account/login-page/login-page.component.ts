import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  faHouse,
  faRightFromBracket,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, FaIconComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  readonly platform = inject(PLATFORM_ID);
  readonly isPlatformBrowser = isPlatformBrowser(this.platform);

  readonly faHouse = faHouse;
  readonly faRightToBracket = faRightToBracket;

  readonly auth = inject(AuthService);
  readonly router = inject(Router);

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  readonly failed = signal<boolean>(false);
  readonly loading = signal<boolean>(false);

  async signIn() {
    this.failed.set(false);
    this.loading.set(true);

    try {
      await this.auth.signIn(
        this.form.controls.email.value ?? '',
        this.form.controls.password.value ?? '',
      );
      this.router.navigateByUrl('/');
    } catch (ex) {
      this.failed.set(true);
    }

    this.loading.set(false);
  }

  async signOut() {
    await this.auth.signOut();
  }
}
