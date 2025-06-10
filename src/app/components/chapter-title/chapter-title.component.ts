import {
  Component,
  input,
  AfterViewInit,
  OnDestroy,
  signal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapter-title',
  imports: [FontAwesomeModule],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.css',
})
export class ChapterTitleComponent implements AfterViewInit, OnDestroy {
  readonly faLink = faLink;

  readonly title = input.required<string>();
  readonly anchor = input.required<string>();

  readonly isVisible = signal<boolean>(false);

  observer: IntersectionObserver | undefined;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.observer = new window.IntersectionObserver(([entry]) => {
        this.isVisible.set(entry.isIntersecting);
      });

      const target = document.querySelector('#' + this.anchor());

      if (target) {
        this.observer?.observe(target);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
