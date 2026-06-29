import { Component, OnInit, signal,VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('dev-digvijay');
  showSnackbar = signal<boolean>(false);
  readonly Ng_Version = signal<string>(VERSION.full);

  ngOnInit() {
    this.triggerSnackbar();
  }

  triggerSnackbar() {
    this.showSnackbar.set(true);
    setTimeout(() => {
      this.dismissSnackbar();
    }, 5000);
  }

  dismissSnackbar() {
    this.showSnackbar.set(false);
  }
}
