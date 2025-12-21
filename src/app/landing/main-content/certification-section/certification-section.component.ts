import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Certification } from 'src/app/core/models/certifications.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-certification-section',
  templateUrl: './certification-section.component.html',
  styleUrls: ['./certification-section.component.scss'],
})
export class CertificationSectionComponent {
  @ViewChild('scrollEndPoint') scrollEndPoint!: ElementRef<HTMLElement>;
  @Output() requestScroll = new EventEmitter<void>();

  //List of certifications displayed in the UI.
  certifications: Certification[] = [];
  showAll: boolean = false;

  get visibleCertificates() {
    return this.showAll
      ? this.certifications
      : this.certifications?.slice(0, 2);
  }

  constructor(public profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.certifications = this.profileDataService.getCertification();
  }

  /**
   * Toggles the visibility of the certificates list.
   *
   * - When collapsing the list (showAll = true → false),
   *   emits an event to request the parent component to handle
   *   the scroll behavior (e.g. scroll to the first card or center).
   *
   * - When expanding the list (showAll = false → true),
   *   scrolls smoothly to the defined end point of the certificates section.
   */
  toggleCertificates(): void {
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
