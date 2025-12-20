import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @ViewChild('desc') descRef!: ElementRef<HTMLParagraphElement>;
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

  isExpanded: boolean = false;
  showToggle: boolean = false;

  /**
   * IntersectionObserver instance used to detect elements entering the viewport.
   */
  private intersectionObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.initializeIntersectionObserver();
    this.checkIfClamped();
  }

  /**
   * Toggles the expanded state of the description text.
   * When expanded, the full description is shown.
   * When collapsed, the description is limited by the line clamp.
   */
  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  /**
   * Checks whether the description text is visually truncated (clamped).
   * Compares the rendered height with the scrollable height to determine
   * if the content exceeds the maximum visible lines.
   *
   * If the content is clamped, the "View more / View less" toggle will be shown.
   */
  private checkIfClamped(): void {
    const el = this.descRef?.nativeElement;
    if (!el) return;

    this.showToggle = el.scrollHeight > el.clientHeight;
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
