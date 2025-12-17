import { Component } from '@angular/core';
import { ViewModeService } from './core/services/view-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portofolio-website';
  constructor(public viewModeService: ViewModeService) {}
}
