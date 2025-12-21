import { Component, HostListener } from '@angular/core';
import { Theme } from 'src/app/core/models/theme.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ViewModeService } from 'src/app/core/services/view-mode.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-floating-settings',
  templateUrl: './floating-settings.component.html',
  styleUrls: ['./floating-settings.component.scss'],
})
export class FloatingSettingsComponent {
  constructor(
    public themeService: ThemeService,
    public viewModeService: ViewModeService,
    private translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('appLanguage') as 'en' | 'id' | null;
    this.language = savedLang || 'en';
    this.translate.use(this.language);
  }

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
    this.translate.use(this.language);
    localStorage.setItem('appLanguage', this.language);
  }

  /**
   * Handles global click events to detect clicks outside the settings menu.
   *
   * Behavior:
   * - Listens for click events on the entire document.
   * - Checks whether the click target is outside the `.settings-wrapper` element.
   * - Automatically closes the menu when a click occurs outside the wrapper.
   *
   * This is commonly used to close dropdowns, popovers, or settings panels
   * when the user interacts outside of the component.
   *
   * @param event The mouse click event triggered on the document.
   */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.settings-wrapper')) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', []) onScroll() {
    const current = window.pageYOffset;
    this.hiddenOnScroll = current > this.lastScroll && current > 15;
    this.lastScroll = current;
    if (this.isOpen) {
      this.isOpen = false;
    }
  }
}
