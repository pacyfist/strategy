import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  readonly platform = inject(PLATFORM_ID);
  readonly isPlatformBrowser = isPlatformBrowser(this.platform);

  readonly auth = inject(AuthService);

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  readonly failed = signal<boolean>(false);

  async signIn() {
    this.failed.set(false);

    try {
      await this.auth.signIn(
        this.form.controls.email.value ?? '',
        this.form.controls.password.value ?? '',
      );
    } catch (ex) {
      this.failed.set(true);
    }
  }

  async signOut() {
    await this.auth.signOut();
  }
}
