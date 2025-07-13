import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [PageTitleComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
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
