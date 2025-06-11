import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[inViewClass]',
})
export class InViewClassDirective implements AfterViewInit, OnDestroy {
  readonly hostRef = inject(ElementRef);
  readonly renderer = inject(Renderer2); // A safe way to manipulate the DOM

  readonly inViewClass = input.required<string>();

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    // Ensures the following logic runs only in the browser, not during server-side rendering.
    if (typeof window !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            // Is the element currently intersecting the viewport?
            if (entry.isIntersecting) {
              // Add the class to the element.
              this.inViewClass()
                .split(' ')
                .forEach((className) =>
                  this.renderer.addClass(this.hostRef.nativeElement, className),
                );

              // We only want the animation to play once.
              // After it's visible, we can stop observing it.
              observer?.unobserve(this.hostRef.nativeElement);
            }
          });
        }
      );
    }

    // Start observing the host element.
    this.observer?.observe(this.hostRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
