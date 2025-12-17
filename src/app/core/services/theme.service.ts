import { Injectable, signal } from '@angular/core';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // SIGNAL: Reactive theme state
  private themeSignal = signal<Theme>(Theme.Light);

  constructor() {
    const saved = localStorage.getItem('theme');
    const theme = this.isValidTheme(saved) ? (saved as Theme) : Theme.Light;

    this.themeSignal.set(theme);
    this.applyTheme(theme);
  }

  /**
   * Returns the current active theme.
   * Used by components to reactively read the theme state.
   */
  get theme(): Theme {
    return this.themeSignal();
  }

  /**
   * Toggles between light and dark themes.
   * Updates the signal, persists the value, and applies the theme to the DOM.
   *
   * @returns The newly applied theme
   */
  toggleTheme(): Theme {
    const next = this.themeSignal() === Theme.Dark ? Theme.Light : Theme.Dark;

    this.themeSignal.set(next);
    localStorage.setItem('theme', next);
    this.applyTheme(next);

    return next;
  }

  /**
   * Validates whether a value is a supported theme.
   * Ensures only 'light' or 'dark' values are accepted.
   *
   * @param value - Value retrieved from storage
   */
  private isValidTheme(value: any): value is Theme {
    return value === Theme.Light || value === Theme.Dark;
  }

  /**
   * Applies the selected theme to the document root element.
   * Handles DOM-related logic separately to follow SRP.
   *
   * @param theme - Theme to be applied
   */
  private applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === Theme.Dark);
  }
}
