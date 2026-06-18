import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceType {
  icon: string;
  role: string;
  startYear: string;
  endYear: string;
  location: string;
  bulletPoints: string[];
}
@Component({
  selector: 'ng-experience',
  imports: [CommonModule],
  template:`
          <section>
            <div class="container">
                <div class="border-x border-primary/10">
                    <div class="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div class="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p class="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Experience
                            </p>
                        </div>
                    </div>
                    <div class="border-t border-primary/10">
                        <div class="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            @for (experience of experienceData(); track $index) {
                            <div class="flex flex-col gap-5 border-dashed border-b border-primary/10 pt-8 sm:pt-10 pb-8 sm:pb-10"
                                [class.first:pt-0]="$first" [class.last:pb-0]="$last" [class.border-b-0]="$last">
                                <img [src]="experience.icon" alt="icon" width="32" height="19">
                                <div class="flex flex-wrap gap-5 items-center justify-between">
                                    <h5>{{ experience.role }}</h5>
                                    <div class="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                        <div class="w-4 h-2 rounded-sm" [ngClass]="{
                              'bg-primary': experience.endYear === 'Present',
                              'bg-primary/10': experience.endYear !== 'Present'
                            }">
                                        </div>
                                        <p class="text-sm xs:text-base text-primary">
                                            {{ experience.startYear }}
                                            –
                                            {{ experience.endYear }}
                                            ·
                                            {{ experience.location }}
                                        </p>
                                    </div>
                                </div>
                                <ul>
                                    @for (point of experience.bulletPoints; track $index) {
                                    <li class="flex items-start gap-2 text-base font-normal text-secondary">
                                        <span class="w-2.5 h-2.5 text-secondary">•</span>
                                        {{ point }}
                                    </li>
                                    }
                                </ul>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `,
})
export class Experience {

  readonly experienceData: Signal<ExperienceType[]> = signal([
    {
      icon: 'assets/icons/company1.svg',
      role: 'Senior Angular Developer',
      startYear: '2024',
      endYear: 'Present',
      location: 'Pune, India',
      bulletPoints: [
        'Developed scalable Angular applications.',
        'Implemented micro-frontend architecture.',
        'Collaborated with cross-functional teams.'
      ]
    },
    {
      icon: 'assets/icons/company2.svg',
      role: 'Full Stack Developer',
      startYear: '2022',
      endYear: '2024',
      location: 'Mumbai, India',
      bulletPoints: [
        'Built Spring Boot microservices.',
        'Integrated AWS cloud services.',
        'Optimized application performance.'
      ]
    }
  ]);
}

