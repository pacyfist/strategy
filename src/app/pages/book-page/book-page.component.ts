import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-book-page',
  imports: [],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent {

  readonly loading = signal<boolean>(true);
}
