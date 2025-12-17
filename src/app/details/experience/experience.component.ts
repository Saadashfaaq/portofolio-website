import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/core/models/experiences.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  // Experience ID retrieved from route params
  experienceId!: string;

  // Selected experience data based on ID
  experienceData!: Experience;

  // Current active image index for slider
  currentImage: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileDataService: ProfileDataService
  ) {}

  /**
   * Angular lifecycle hook.
   * Initializes experience data and resets scroll position.
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.initializeExperienceData();
  }

  // ======================= INIT LOGIC =======================

  /**
   * Retrieves experience data based on the route parameter.
   * Redirects to home if the experience is not found.
   */
  private initializeExperienceData(): void {
    const experienceId: string | null = this.route.snapshot.paramMap.get('id');

    // Redirect if ID is missing
    if (!experienceId) {
      this.router.navigate(['/']);
      return;
    }

    this.experienceId = experienceId;
    this.experienceData = this.profileDataService.getExperienceById(
      this.experienceId
    );

    // Redirect if experience data is not found
    if (!this.experienceData) {
      this.router.navigate(['/']);
    }
  }

  // ======================= SLIDER LOGIC =======================

  /**
   * Moves the slider to the next image.
   */
  nextImage(): void {
    const images: string[] | undefined = this.experienceData.experienceImages;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage + 1) % images.length;
  }

  /**
   * Moves the slider to the previous image.
   */
  prevImage(): void {
    const images: string[] | undefined = this.experienceData.experienceImages;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage - 1 + images.length) % images.length;
  }
}
