import { inject, Injectable, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly auth = inject(Auth);

  readonly user = signal('');

  async login(login: string, password: string) {
    const user = await signInWithEmailAndPassword(this.auth, login, password);
    this.user.set(user.user.email ?? '');
  }
}
