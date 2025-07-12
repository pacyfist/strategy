import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PageLeadComponent } from '../../components/page-lead/page-lead.component';

@Component({
  selector: 'app-about-page',
  imports: [PageTitleComponent, PageLeadComponent],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {}
