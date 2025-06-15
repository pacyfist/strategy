import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLink
} from '@fortawesome/free-solid-svg-icons';
import { ChapterTitleComponent } from '../../components/chapter-title/chapter-title.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { InViewClassDirective } from '../../directives/in-view-class.directive';

@Component({
  selector: 'app-landing-page',
  imports: [
    FontAwesomeModule,
    ChapterTitleComponent,
    InViewClassDirective,
    ContactFormComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  /* icons */
  faLink = faLink;
}
