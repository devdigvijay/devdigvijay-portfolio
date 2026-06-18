import { Component } from '@angular/core';

@Component({
  selector: 'ng-header',
  imports: [],
  template: `
        <header>
            <div class="fixed top-0 left-0 right-0 z-50">
                <div class="group relative bg-primary overflow-hidden">
                    <div class="absolute inset-0 opacity-30">
                        <div
                            class="w-full h-full bg-[url('/assets/images/announcementbar/announcementbar-bg.jpg')] bg-cover bg-center bg-no-repeat">
                        </div>
                    </div>
                </div>
            </div>
        </header>
  `,
  styleUrl: './header.css',
})
export class Header {}
