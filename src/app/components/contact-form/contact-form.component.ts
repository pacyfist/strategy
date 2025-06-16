import { Component, effect, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { InViewClassDirective } from '../../directives/in-view-class.directive';

@Component({
  selector: 'app-contact-form',
  imports: [FontAwesomeModule, InViewClassDirective, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  /* icons */
  readonly faAsterisk = faAsterisk;

  readonly submitted = signal<boolean>(true);

  readonly form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    question: new FormControl(''),
  });

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(
        localStorage.getItem('app-contact-form') ?? '{}',
      );

      this.form.controls.name.setValue(stored.name);
      this.form.controls.email.setValue(stored.email);
      this.form.controls.question.setValue(stored.question);

      this.submitted.set(stored.submitted);
    }

    effect(() => {
      if (!this.submitted()) {
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
    if (!this.submitted()) {
      if (this.form.valid) {
        localStorage.setItem(
          'app-contact-form',
          JSON.stringify({ submitted: true, ...this.form.value }),
        );

        this.submitted.set(true);
      }
    } else {
      localStorage.removeItem('app-contact-form');

      this.submitted.set(false);
    }
  }
}
