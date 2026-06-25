import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FeaturedWork {
    image: string;
    title: string;
    roles: string[];
}

@Component({
    selector: 'ng-work',
    imports: [CommonModule, RouterLink],
    template: `
          <section>
            <div class="container">
                <div class="border-x border-primary/10">
                    <div class="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div class="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p class="text-sm tracking-[2px] text-primary uppercase font-medium">
                                Featured work
                            </p>
                            <a routerLink="/"
                                class="inline-flex items-center justify-center border border-primary/10 rounded-md py-3 px-5 hover:bg-accent">
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        @for (work of featureWork(); track $index) {
                        <div class="group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6" [class.md:border-l]="$index % 2 === 1" [class.md:border-primary/10]="$index % 2 === 1">
                            <a routerLink="/" class="overflow-hidden">
                                <img [src]="work.image" [alt]="work.title"
                                    class="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out">
                            </a>
                            <div class="flex flex-col gap-1 sm:gap-2 px-2">
                                <a routerLink="/">
                                    <h4>{{ work.title }}</h4>
                                </a>
                                <div class="flex">
                                    <p>{{ work.roles.join(', ') }}</p>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
  `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Work {

    readonly featureWork: Signal<FeaturedWork[]> = signal([
        {
            image: '/images/feature-work/feature-img-1.png',
            title: 'Banking Platform',
            roles: ['Angular', 'Java', 'AWS']
        },
        {
            image: '/images/feature-work/feature-img-2.png',
            title: 'Industrial Automation Dashboard',
            roles: ['Angular', 'Go', 'PLC']
        },
         {
            image: '/images/feature-work/feature-img-1.png',
            title: 'Banking Platform',
            roles: ['Angular', 'Java', 'AWS']
        },
        {
            image: '/images/feature-work/feature-img-2.png',
            title: 'Industrial Automation Dashboard',
            roles: ['Angular', 'Go', 'PLC']
        }
    ]);
}


