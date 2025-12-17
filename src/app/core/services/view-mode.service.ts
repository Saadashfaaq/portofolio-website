import { Injectable, signal } from '@angular/core';

export type ViewMode = 'desktop' | 'mobile-preview';

@Injectable({
  providedIn: 'root',
})
export class ViewModeService {
  // SIGNAL: Controls current view mode (desktop or mobile preview)
  viewMode = signal<ViewMode>('desktop');

  /**
   * Toggles between desktop view and mobile preview mode.
   * Updates the view mode signal reactively.
   */
  toggleMobilePreview(): void {
    this.viewMode.update((mode: ViewMode) =>
      mode === 'desktop' ? 'mobile-preview' : 'desktop'
    );
  }

  /**
   * Checks whether the current view mode is mobile preview.
   *
   * @returns True if mobile preview mode is active
   */
  isMobilePreview(): boolean {
    return this.viewMode() === 'mobile-preview';
  }
}
