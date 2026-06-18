import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
          <footer class="-translate-y-[1px] bg-white border-t border-primary/10">
            <div class="container">
                <div class="border-x border-primary/10">
                    <div class="max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>
                            2026 © Designed by
                            <a href="https://getnextjstemplates.com/" target="_blank" rel="noopener noreferrer"
                                class="hover:text-primary">
                                Getnextjstemplates
                            </a>
                            — All rights reserved
                        </p>
                        <p>
                            Created with care ·
                            <a href="https://www.wrappixel.com/" target="_blank" rel="noopener noreferrer"
                                class="hover:text-primary">
                                @wrappixel
                            </a>
                            · 12k followers • Distributed by
                            <a href="https://www.themewagon.com/" target="_blank" rel="noopener noreferrer"
                                class="hover:text-primary">
                                ThemeWagon
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  `,
  styleUrl: './footer.css',
})
export class Footer {}
