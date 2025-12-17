import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { ProfileDataService } from 'src/app/core/services/profile-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  // Project ID retrieved from route params
  projectId!: string;

  // Selected project data based on ID
  projectData!: Project;

  // Current active image index for slider
  currentImage: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileDataService: ProfileDataService
  ) {}

  /**
   * Angular lifecycle hook.
   * Initializes project data and resets scroll position.
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.initializeProjectData();
  }

  /**
   * Retrieves project data based on the route parameter.
   * Redirects to home if the project is not found.
   */
  private initializeProjectData(): void {
    const projectId: string | null = this.route.snapshot.paramMap.get('id');

    if (!projectId) {
      this.router.navigate(['/']);
      return;
    }

    this.projectId = projectId;
    this.projectData = this.profileDataService.getProjectById(this.projectId);

    if (!this.projectData) {
      this.router.navigate(['/']);
    }
  }

  /**
   * Opens the project GitHub repository in a new browser tab.
   */
  openGithub(): void {
    window.open(this.projectData.links.github, '_blank');
  }

  /**
   * Opens the live project in a new browser tab.
   */
  openProject(): void {
    window.open(this.projectData.links.live, '_blank');
  }

  /**
   * Moves the slider to the next image.
   */
  nextImage(): void {
    const images: string[] | undefined = this.projectData.images;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage + 1) % images.length;
  }

  /**
   * Moves the slider to the previous image.
   */
  prevImage(): void {
    const images: string[] | undefined = this.projectData.images;

    if (!images || images.length <= 1) {
      return;
    }

    this.currentImage = (this.currentImage - 1 + images.length) % images.length;
  }
}
