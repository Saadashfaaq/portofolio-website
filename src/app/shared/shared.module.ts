import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingSettingsComponent } from './floating-settings/floating-settings.component';
import { CardComponent } from './components/card/card.component';
import { SmartImageComponent } from './components/smart-image/smart-image.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FloatingSettingsComponent, CardComponent, SmartImageComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [
    FloatingSettingsComponent,
    CardComponent,
    SmartImageComponent,
    RouterModule,
    TranslateModule,
  ],
})
export class SharedModule {}
