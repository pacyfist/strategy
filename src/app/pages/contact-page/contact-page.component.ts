import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-contact-page',
  imports: [PageTitleComponent, PageTeaserComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {}
