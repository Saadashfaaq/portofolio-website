import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  @ViewChild('scrollEndPoint') scrollEndPoint!: ElementRef<HTMLElement>;
  @Output() requestScroll = new EventEmitter<void>();

  //List of projects displayed in the UI.
  projects: Project[];
  showAll: boolean = false;

  get visibleProjects() {
    return this.showAll ? this.projects : this.projects?.slice(0, 2);
  }

  constructor(public profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.projects = this.profileDataService.getProject();
  }

  /**
   * Toggles the visibility of the Projects list.
   *
   * - When collapsing the list (showAll = true → false),
   *   emits an event to request the parent component to handle
   *   the scroll behavior (e.g. scroll to the first card or center).
   *
   * - When expanding the list (showAll = false → true),
   *   scrolls smoothly to the defined end point of the certificates section.
   */
  toggleProjects(): void {
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
