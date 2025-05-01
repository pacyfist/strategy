import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  readonly faMagnifyingGlass = faMagnifyingGlass;

  readonly value = input.required<string>();
  readonly changed = output<string>();

  update(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.changed.emit(input.value);
  }
}
