import { Component, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseStudy {
  name: string;
  url: string;
}

interface CaseStudies {
  caseStudies: CaseStudy[];
  sideProjects: SideProject[];
}

interface SideProject {
  name: string;
  url?: string;
  comingSoon: boolean;
}

@Component({
  selector: 'ng-project-work',
  imports: [],
  templateUrl: './project-work.html',
  styleUrls: ['./project-work.css'],
})
export class ProjectWork {
  readonly caseStudies: Signal<CaseStudies> = signal({
    caseStudies: [
      {
        name: 'Banking Micro Frontend Platform',
        url: '/projects/banking'
      },
      {
        name: 'Industrial Automation Dashboard',
        url: '/projects/automation'
      }
    ],
    sideProjects: [
      {
        name: 'DevOps Automation Tool',
        url: '/projects/devops-tool',
        comingSoon: false
      },
      {
        name: 'Cloud Cost Optimizer',
        comingSoon: true
      }
    ]
  });

}