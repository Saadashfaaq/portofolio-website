import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() logo!: string | null;
  @Input() title!: string; // required
  @Input() subtitle!: string | null;
  @Input() description!: string | null;
  @Input() date!: string | null;
  @Input() location!: string | null;

  // optional action button
  @Input() detailLink!: string | null;
  @Input() buttonLabel: string = 'View Details';
  @Input() skillSection!: boolean;

  /**
   * IntersectionObserver instance used to detect elements entering the viewport.
   */
  private intersectionObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.initializeIntersectionObserver();
  }

  /**
   * Initializes the IntersectionObserver and observes fade-in elements.
   */
  private initializeIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements: NodeListOf<Element> =
      document.querySelectorAll('.animate-fade-in');

    elements.forEach((element: Element): void => {
      this.intersectionObserver?.observe(element);
    });
  }

  /**
   * Cleans up the IntersectionObserver to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }
}
