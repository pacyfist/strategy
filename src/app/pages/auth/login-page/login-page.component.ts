import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [PageTitleComponent, FormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  readonly auth = inject(AuthService);

  readonly email = signal<string>('');
  readonly password = signal<string>('');

  readonly failed = signal<boolean>(false);

  async loginClick() {
    try {
      await this.auth.login(this.email(), this.password());

      this.failed.set(false);
    } catch (ex) {
      this.failed.set(true);
    }
  }
}
