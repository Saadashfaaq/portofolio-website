import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ExperienceSectionComponent } from './main-content/experience-section/experience-section.component';
import { EducationSectionComponent } from './main-content/education-section/education-section.component';
import { CertificationSectionComponent } from './main-content/certification-section/certification-section.component';
import { AboutSectionComponent } from './main-content/about-section/about-section.component';
import { ProjectSectionComponent } from './main-content/project-section/project-section.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './main-content/contact/contact.component';

@NgModule({
  declarations: [
    LandingComponent,
    MainContentComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    CertificationSectionComponent,
    AboutSectionComponent,
    ProjectSectionComponent,
    ContactComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
  exports: [],
})
export class LandingModule {}
