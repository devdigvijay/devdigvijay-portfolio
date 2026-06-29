import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-page-404',
  imports: [],
  templateUrl: './page-404.html',
  styleUrl: './page-404.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page404 {}
