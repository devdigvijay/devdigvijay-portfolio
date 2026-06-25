import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';

interface EducationData {
  date: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ng-education',
  imports: [],
  template: ` 
 <section>
  <div class="container">
    <div class="border-x border-primary/10">
      <div class="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
        <div class="flex flex-col xs:flex-row gap-5 items-center justify-between">
          <p class="text-sm tracking-[2px] text-primary uppercase font-medium">
            Education
          </p>
        </div>
      </div>
      <div class="border-t border-primary/10">
        <div class="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
          <div
            class="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-primary/10">
          </div>
          <div class="relative">
            @for (item of educationData(); track $index) {
              <div
                class="relative flex flex-col sm:flex-row sm:items-start gap-4"
                [class.mb-8]="$index !== educationData().length - 1"
                [class.sm:mb-16]="$index !== educationData().length - 1">
                <div class="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                  <p class="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed">
                    {{ item.date }}
                  </p>
                  <div
                    class="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1.5 border border-primary/10 rounded-full bg-white">
                    <div class="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div class="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                  <h5 class="font-semibold">
                    {{ item.title }}
                  </h5>
                  <p class="text-primary">
                    {{ item.subtitle }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Education {

  readonly educationData: Signal<EducationData[]> = signal([
    {
      date: '2021',
      title: 'Bachelor of Engineering in Electronics and Telecommunication Engineering',
      subtitle: 'Savitribai Phule Pune University (SPPU)',
    },
    {
      date: '2015',
      title: 'Diploma in Electronics and Telecommunication Engineering',
      subtitle: 'Maharashtra State Board of Technical Education (MSBTE) — Mumbai, Maharashtra, India',
    },
    {
      date: '2011',
      title: 'Secondary School Certificate Examination (SSC)',
      subtitle: 'NES Boys High School,Parola, Maharashtra, India',
    },
  ]);
}

