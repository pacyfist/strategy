import { Component } from '@angular/core';
import { PageLeadComponent } from '../../components/page-lead/page-lead.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-privacy-page',
  imports: [PageLeadComponent, PageTitleComponent],
  templateUrl: './privacy-page.component.html',
})
export class PrivacyPageComponent {}
