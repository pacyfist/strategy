import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  /* icons */
  readonly faAsterisk = faAsterisk;

  readonly platformId = inject(PLATFORM_ID);

  readonly errorsRevealed = signal<boolean>(false);
  readonly formSubmitted = signal<boolean>(true);

  readonly form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    question: new FormControl(''),
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = JSON.parse(
        localStorage.getItem('app-contact-form') ?? '{}',
      );

      this.form.controls.name.setValue(stored.name);
      this.form.controls.email.setValue(stored.email);
      this.form.controls.question.setValue(stored.question);

      this.formSubmitted.set(stored.submitted);

      console.log(this.form);
    }

    effect(() => {
      if (!this.formSubmitted()) {
        this.form.controls.name.enable();
        this.form.controls.email.enable();
        this.form.controls.question.enable();
      } else {
        this.form.controls.name.disable();
        this.form.controls.email.disable();
        this.form.controls.question.disable();
      }
    });
  }

  submit() {
    if (!this.formSubmitted()) {
      if (this.form.valid) {
        localStorage.setItem(
          'app-contact-form',
          JSON.stringify({ submitted: true, ...this.form.value }),
        );

        this.formSubmitted.set(true);
      } else {
        this.errorsRevealed.set(true);
      }
    } else {
      localStorage.removeItem('app-contact-form');

      this.formSubmitted.set(false);
    }
  }
}
