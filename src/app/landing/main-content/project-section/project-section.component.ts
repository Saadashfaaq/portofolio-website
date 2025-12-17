import { Component } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent {
  //List of projects displayed in the UI.
  projects: Project[];

  constructor(public profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.projects = this.profileDataService.getProject();
  }
}
