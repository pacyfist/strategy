import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  readonly pageNumber = input.required<number>();
  readonly pageCount = input.required<number>();

  readonly pageChanged = output<number>();

  readonly pageNumbers = computed(() => [...Array(this.pageCount()).keys()]);

  changePage(value: number): void {
    this.pageChanged.emit(value);
  }
}
