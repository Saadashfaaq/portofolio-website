import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DetailsComponent,
    ExperienceComponent,
    CertificationComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, DetailsRoutingModule, SharedModule, TranslateModule],
})
export class DetailsModule {}
