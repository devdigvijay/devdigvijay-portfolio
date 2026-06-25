import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-divider',
  imports: [],
  template: `
      <div class="container">
        <div class="h-4 border border-primary/10"></div>
      </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Divider { }
