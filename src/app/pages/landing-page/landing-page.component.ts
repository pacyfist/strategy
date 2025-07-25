import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChapterTitleComponent } from '../../components/chapter-title/chapter-title.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-landing-page',
  imports: [ChapterTitleComponent, ContactFormComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
