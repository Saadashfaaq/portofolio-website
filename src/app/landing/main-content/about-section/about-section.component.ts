import { Component } from '@angular/core';
import { ProfileData } from 'src/app/core/models/profile.model';
import { PROFILE_DATA } from 'src/app/core/profile-data/profile.data';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  //Profile data used to populate personal information in the UI.
  profileData: ProfileData = PROFILE_DATA;

  //Displayed name that is animated using a typing effect.
  typedName: string = '';

  //Full name source used for the typing animation.
  private readonly fullName: string = this.profileData.name;

  //Current index used for typing and deleting characters.
  private typingIndex: number = 0;

  //Determines whether the typing effect is in deleting mode.
  private isDeleting: boolean = false;

  //Interval reference for the typing animation.
  // Used to properly clear the interval on component destroy.
  private typingIntervalId: number | null = null;

  //Timeout reference used after typing is completed.
  private pauseTimeoutId: number | null = null;

  ngOnInit(): void {
    this.startTypingEffect();
  }

  /**
   * Opens the CV file in a new browser tab.
   */
  downloadCV(): void {
    window.open('assets/files/CV-Reynaldy-Septian.pdf', '_blank');
  }

  /**
   * Smoothly scrolls the page to the career / portfolio section.
   */
  scrollToCareerTabs(): void {
    document.getElementById('portofolio')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  /**
   * Starts a looping typing and deleting text animation.
   */
  private startTypingEffect(): void {
    const typingSpeed: number = 120;
    const deletingSpeed: number = 80;
    const pauseAfterTyping: number = 2000;

    this.typingIntervalId = window.setInterval(
      (): void => {
        if (!this.isDeleting) {
          // Typing characters
          this.typedName = this.fullName.slice(0, this.typingIndex + 1);
          this.typingIndex++;

          if (this.typingIndex === this.fullName.length) {
            this.pauseTimeoutId = window.setTimeout((): void => {
              this.isDeleting = true;
            }, pauseAfterTyping);
          }
        } else {
          // Deleting characters
          this.typedName = this.fullName.slice(0, this.typingIndex - 1);
          this.typingIndex--;

          if (this.typingIndex === 0) {
            this.isDeleting = false;
          }
        }
      },
      this.isDeleting ? deletingSpeed : typingSpeed
    );
  }

  /**
   * Cleans up intervals and timeouts to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.typingIntervalId !== null) {
      clearInterval(this.typingIntervalId);
    }

    if (this.pauseTimeoutId !== null) {
      clearTimeout(this.pauseTimeoutId);
    }
  }
}
