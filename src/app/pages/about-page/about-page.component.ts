import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { PageTeaserComponent } from '../../components/page-teaser/page-teaser.component';

@Component({
  selector: 'app-about-page',
  imports: [PageTitleComponent, PageTeaserComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export class AboutPageComponent {}
