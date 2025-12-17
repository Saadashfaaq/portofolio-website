import { Component } from '@angular/core';
import { Experience } from 'src/app/core/models/experiences.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
  //List of Experiences displayed in the UI.
  experiences: Experience[];

  constructor(public themeService: ProfileDataService) {}

  ngOnInit(): void {
    this.experiences = this.themeService.getExperience();
  }
}
