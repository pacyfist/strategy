import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { exhaustMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly auth = inject(Auth);
  readonly firestore = inject(Firestore);

  readonly user$ = user(this.auth).pipe(
    exhaustMap(async (user) => {
      if (user === null) {
        return null;
      }

      const userDocument = await getDoc(doc(this.firestore, 'users', user.uid));
      const userData = userDocument.data() ?? null;

      return {
        uid: user.uid,
        email: user.email,
        isAdmin: userData?.['isAdmin'] ?? false,
      } as IUser;
    }),
  );
  readonly user = toSignal(this.user$);

  readonly isUserLoggedOut = computed(() => this.user() === null);
  readonly isUserLoggedIn = computed(() => !!this.user());
  readonly isUserAdmin = computed(() => this.user()?.isAdmin);

  readonly useDisplayName = computed(() => this.user()?.email);

  async signIn(login: string, password: string) {
    await signInWithEmailAndPassword(this.auth, login, password);
  }

  async signOut() {
    await this.auth.signOut();
  }

  async create(login: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, login, password);
  }
}

interface IUser {
  uid: string;
  email: string;
  isAdmin: boolean;
}
