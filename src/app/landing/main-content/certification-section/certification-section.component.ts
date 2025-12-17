import { Component } from '@angular/core';
import { Certification } from 'src/app/core/models/certifications.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-certification-section',
  templateUrl: './certification-section.component.html',
  styleUrls: ['./certification-section.component.scss'],
})
export class CertificationSectionComponent {
  //List of certifications displayed in the UI.
  certifications: Certification[] = [];

  constructor(public profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.certifications = this.profileDataService.getCertification();
  }
}
