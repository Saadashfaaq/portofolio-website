import { Component, HostListener } from '@angular/core';
import { Theme } from 'src/app/core/models/theme.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ViewModeService } from 'src/app/core/services/view-mode.service';

@Component({
  selector: 'app-floating-settings',
  templateUrl: './floating-settings.component.html',
  styleUrls: ['./floating-settings.component.scss'],
})
export class FloatingSettingsComponent {
  constructor(
    public themeService: ThemeService,
    public viewModeService: ViewModeService
  ) {}
  theme: Theme = this.themeService.theme; // reactive signal value

  isOpen = false;
  language: 'en' | 'id' = 'en';

  // Auto-hide scroll
  hiddenOnScroll = false;
  lastScroll = 0;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  toggleTheme() {
    this.theme = this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'id' : 'en';
  }

  triggerHaptic() {
    navigator.vibrate?.(10);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.settings-wrapper')) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const current = window.pageYOffset;
    this.hiddenOnScroll = current > this.lastScroll && current > 50;
    this.lastScroll = current;
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
}
