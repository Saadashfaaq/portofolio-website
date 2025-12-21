import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Represents a single tab configuration.
 */
interface TabItem {
  label: string;
  key: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations: [
    trigger('tabFade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(12px)',
        }),
        animate(
          '780ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ],
})
export class MainContentComponent {
  @ViewChild('scrollStartPoint') scrollStartPoint!: ElementRef<HTMLElement>;
  /**
   * List of available tabs displayed in the UI.
   */
  tabs: TabItem[] = [
    { label: 'Experience', key: 'experience' },
    { label: 'Projects', key: 'project' },
    { label: 'Certifications', key: 'certification' },
    { label: 'Education', key: 'education' },
  ];

  /**
   * Currently active tab key.
   * Default value is set to 'experience'.
   */
  activeTab: string = 'experience';

  constructor(private readonly route: ActivatedRoute) {}

  /**
   * Angular lifecycle hook.
   * Listens to query parameter changes and updates the active tab accordingly.
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: { [key: string]: string }) => {
      if (params['tab']) {
        this.activeTab = params['tab'];
      }
    });
  }

  /**
   * Updates the active tab when a user selects a tab.
   *
   * @param tabKey - The key of the selected tab
   */
  setActive(tabKey: string): void {
    this.activeTab = tabKey;
  }

  /**
   * Scrolls smoothly to the starting point of the section.
   * Uses a predefined DOM reference as the scroll target
   * to bring the content into view from the top.
   */
  scrollToPointer(): void {
    this.scrollStartPoint?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
