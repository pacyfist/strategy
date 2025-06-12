import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { PageTeaserComponent } from "../../components/page-teaser/page-teaser.component";

@Component({
  selector: 'app-contact-page',
  imports: [FontAwesomeModule, PageTitleComponent, PageTeaserComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  faAsterisk = faAsterisk;
}
