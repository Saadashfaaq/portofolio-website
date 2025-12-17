import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingSettingsComponent } from './floating-settings/floating-settings.component';
import { CardComponent } from './components/card/card.component';
import { SmartImageComponent } from './components/smart-image/smart-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FloatingSettingsComponent, CardComponent, SmartImageComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    FloatingSettingsComponent,
    CardComponent,
    SmartImageComponent,
    RouterModule,
  ],
})
export class SharedModule {}
