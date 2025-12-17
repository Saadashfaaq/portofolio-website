import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smart-image',
  templateUrl: './smart-image.component.html',
  host: {
    class: 'block overflow-hidden',
  },
})
export class SmartImageComponent {
  @Input() src!: string;
  @Input() alt = '';

  loaded = false;
  error = false;

  onLoad() {
    this.loaded = true;
  }

  onError() {
    this.error = true;
    this.loaded = true; // stop skeleton
  }
}
