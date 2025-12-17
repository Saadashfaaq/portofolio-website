import { Component } from '@angular/core';
import { ContactCard, ProfileData } from 'src/app/core/models/profile.model';
import { PROFILE_DATA } from 'src/app/core/profile-data/profile.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // Profile data used as the source of contact information.
  profileData: ProfileData = PROFILE_DATA;

  // Sorted list of contact cards displayed in the UI.
  contactCards: ContactCard[] = [];

  ngOnInit(): void {
    this.initializeContactCards();
  }

  /**
   * Initializes and sorts contact cards based on priority.
   * Uses immutability to avoid mutating the original data source.
   */
  private initializeContactCards(): void {
    const contactCards: ContactCard[] | undefined =
      this.profileData?.contactCards;

    if (!contactCards || contactCards.length === 0) {
      return;
    }

    this.contactCards = [...contactCards].sort(
      (a: ContactCard, b: ContactCard): number => a.priority - b.priority
    );
  }
}
