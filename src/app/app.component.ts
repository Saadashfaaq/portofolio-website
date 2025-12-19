import { Component } from '@angular/core';
import { ViewModeService } from './core/services/view-mode.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portofolio-website';

  constructor(
    private translate: TranslateService,
    public viewModeService: ViewModeService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
