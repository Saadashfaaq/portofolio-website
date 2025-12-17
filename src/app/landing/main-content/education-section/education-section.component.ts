import { Component } from '@angular/core';
import { Education } from 'src/app/core/models/educations.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  //List of Education displayed in the UI.
  educations: Education[];
  constructor(public themeService: ProfileDataService) {}

  ngOnInit(): void {
    this.educations = this.themeService.getEducation();
  }
}
