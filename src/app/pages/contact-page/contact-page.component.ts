import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { PageLeadComponent } from '../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-contact-page',
  imports: [PageTitleComponent, PageLeadComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {}
