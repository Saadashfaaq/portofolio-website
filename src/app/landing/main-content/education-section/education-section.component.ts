import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Education } from 'src/app/core/models/educations.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  @ViewChild('scrollEndPoint') scrollEndPoint!: ElementRef<HTMLElement>;
  @Output() requestScroll = new EventEmitter<void>();

  //List of Education displayed in the UI.
  educations: Education[];
  showAll: boolean = false;

  get visibleEducations() {
    return this.showAll ? this.educations : this.educations?.slice(0, 2);
  }

  constructor(public themeService: ProfileDataService) {}

  ngOnInit(): void {
    this.educations = this.themeService.getEducation();
  }

  /**
   * Toggles the visibility of the education list.
   *
   * - When collapsing the list (showAll = true → false),
   *   emits an event to request the parent component to handle
   *   the scroll behavior (e.g. scroll to the first card or center).
   *
   * - When expanding the list (showAll = false → true),
   *   scrolls smoothly to the defined end point of the education section.
   */
  toggleEducation(): void {
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
