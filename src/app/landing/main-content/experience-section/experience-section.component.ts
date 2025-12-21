import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Experience } from 'src/app/core/models/experiences.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
  @ViewChild('scrollEndPoint') scrollEndPoint!: ElementRef<HTMLElement>;
  @Output() requestScroll = new EventEmitter<void>();
  //List of Experiences displayed in the UI.
  experiences: Experience[];
  showAll: boolean = false;

  get visibleExperiences() {
    return this.showAll ? this.experiences : this.experiences?.slice(0, 2);
  }

  constructor(public themeService: ProfileDataService) {}

  ngOnInit(): void {
    this.experiences = this.themeService.getExperience();
  }

  /**
   * Toggles the visibility of the experiences list.
   *
   * - When collapsing the list (showAll = true → false),
   *   emits an event to request the parent component to handle
   *   the scroll behavior (e.g. scroll to the first card or center).
   *
   * - When expanding the list (showAll = false → true),
   *   scrolls smoothly to the defined end point of the experiences section.
   */
  toggleExperiences(): void {
    if (this.showAll) {
      this.showAll = !this.showAll;
      this.requestScroll.emit();
    } else {
      this.showAll = !this.showAll;
      this.scrollEndPoint?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
