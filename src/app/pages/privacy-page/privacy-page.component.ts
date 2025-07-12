import { Component } from '@angular/core';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-privacy-page',
  imports: [PageTeaserComponent, PageTitleComponent],
  templateUrl: './privacy-page.component.html',
})
export class PrivacyPageComponent {}
