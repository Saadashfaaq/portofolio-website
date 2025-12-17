import { Injectable } from '@angular/core';
import { Experience } from '../models/experiences.model';
import { Education } from '../models/educations.model';
import { Certification } from '../models/certifications.model';
import { EXPERIENCE } from '../profile-data/experiences.data';
import { EDUCATION } from '../profile-data/educations.data';
import { CERTIFICATIONS } from '../profile-data/certifications.data';
import { Project } from '../models/project.model';
import { PROJECT } from '../profile-data/project.data';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  // -------------------------
  // Experience
  // -------------------------

  /**
   * Retrieves the full list of experiences.
   */
  getExperience(): Experience[] {
    return EXPERIENCE;
  }

  /**
   * Retrieves a single experience by its unique ID.
   *
   * @param id - The unique identifier of the experience
   */
  getExperienceById(id: string): Experience | undefined {
    return EXPERIENCE.find((item) => item.id === id);
  }

  // -------------------------
  // Education
  // -------------------------

  /**
   * Retrieves the full list of education records.
   */
  getEducation(): Education[] {
    return EDUCATION;
  }

  /**
   * Retrieves a single education record by its unique ID.
   *
   * @param id - The unique identifier of the education record
   */
  getEducationById(id: string): Education | undefined {
    return EDUCATION.find((item) => item.id === id);
  }

  // -------------------------
  // Certification
  // -------------------------

  /**
   * Retrieves the full list of certifications.
   */
  getCertification(): Certification[] {
    return CERTIFICATIONS;
  }

  /**
   * Retrieves a single certification by its unique ID.
   *
   * @param id - The unique identifier of the certification
   */
  getCertificationById(id: string): Certification | undefined {
    return CERTIFICATIONS.find((item) => item.id === id);
  }

  /**
   * Retrieves the full list of projects.
   */
  getProject(): Project[] {
    return PROJECT;
  }

  /**
   * Retrieves a single project by its unique ID.
   *
   * @param id - The unique identifier of the project
   */
  getProjectById(id: string): Project {
    return PROJECT.find((item) => item.id === id);
  }
}
