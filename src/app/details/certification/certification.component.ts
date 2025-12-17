import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from 'src/app/core/models/certifications.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent {
  // Certification ID retrieved from route params
  certificationId!: string;

  // Selected certification data based on ID
  certificationData!: Certification;

  // Current active image index for slider
  currentImage: number = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly profileDataService: ProfileDataService
  ) {}

  /**
   * Angular lifecycle hook.
   * Initializes certification data and resets scroll position.
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.initializeCertificationData();
  }

  // ======================= INIT LOGIC =======================

  /**
   * Retrieves certification data based on the route parameter.
   * Redirects to home if the certification is not found.
   */
  private initializeCertificationData(): void {
    const certificationId: string | null =
      this.route.snapshot.paramMap.get('id');

    // Redirect if ID is missing
    if (!certificationId) {
      this.router.navigate(['/']);
      return;
    }

    this.certificationId = certificationId;
    this.certificationData = this.profileDataService.getCertificationById(
      this.certificationId
    );

    // Redirect if certification data is not found
    if (!this.certificationData) {
      this.router.navigate(['/']);
    }
  }

  // ======================= SLIDER LOGIC =======================

  /**
   * Moves the slider to the next image.
   */
  nextImage(): void {
    const images: string[] | undefined =
      this.certificationData.certificateImages;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage + 1) % images.length;
  }

  /**
   * Moves the slider to the previous image.
   */
  prevImage(): void {
    const images: string[] | undefined =
      this.certificationData.certificateImages;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage - 1 + images.length) % images.length;
  }
}
