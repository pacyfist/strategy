import { Component, input, model, output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  imports: [FaIconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  readonly faMagnifyingGlass = faMagnifyingGlass;

  readonly value = model.required<string>();

  update(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
  }
}
