import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // 1. Explicitly prerender the 404 path to force HTML generation
  {
    path: '404',
    renderMode: RenderMode.Prerender
  },
  // 2. Explicitly prerender your landing page (highly recommended for performance)
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  // 3. Catch-all fallback rule for everything else
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];