import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { InViewClassDirective } from '../../directives/in-view-class.directive';

@Component({
  selector: 'app-contact-form',
  imports: [FontAwesomeModule, InViewClassDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  /* icons */
  faAsterisk = faAsterisk;
}
