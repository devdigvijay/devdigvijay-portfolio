import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from '../../components/home/hero-section/hero-section';
import { Divider } from '../../components/divider/divider';
import { AboutMe } from '../../components/home/about-me/about-me';
import { Education } from '../../components/home/education/education';
import { Work } from '../../components/home/work/work';
import { Experience } from '../../components/home/experience/experience';
import { ProjectWork } from '../../components/home/project-work/project-work';

@Component({
  selector: 'ng-landing-devdigvijay',
  imports: [HeroSection, Divider, AboutMe, Education, Work, Experience, ProjectWork],
  template: `
  <main>
    <ng-hero-section />
    <ng-divider />
    <ng-about-me />
    <ng-divider />
    <ng-work />
    <ng-divider />
    <ng-experience />
    <ng-divider />
    <ng-education />
    <ng-divider />
    <ng-project-work />
    <ng-divider />
</main>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Landing { }
