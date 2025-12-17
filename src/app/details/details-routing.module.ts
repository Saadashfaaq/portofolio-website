import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'experience/:id', component: ExperienceComponent },
  { path: 'certification/:id', component: CertificationComponent },
  { path: 'project/:id', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
