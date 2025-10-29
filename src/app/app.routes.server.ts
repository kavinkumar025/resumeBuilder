import { RenderMode, ServerRoute } from '@angular/ssr';

// Mark parameterized routes as Server-rendered to avoid prerender errors.
export const serverRoutes: ServerRoute[] = [
  // Mark parameterized route as prerendered with no params to skip static generation.
  { path: 'jobs/:id', renderMode: RenderMode.Prerender, getPrerenderParams: async () => [] },
  // Fallback: server-render any other routes
  { path: '**', renderMode: RenderMode.Server }
];
