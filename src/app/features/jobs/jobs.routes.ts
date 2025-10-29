import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', loadComponent: () => import('./job-search.component').then(m => m.JobSearchComponent), title: 'Job Search' },
  { path: 'results', loadComponent: () => import('./job-results.component').then(m => m.JobResultsComponent), title: 'Job Results' },
  // TODO: Switch to ':id' path once SSR getPrerenderParams is configured.
  { path: 'detail', loadComponent: () => import('./job-detail.component').then(m => m.JobDetailComponent), title: 'Job Detail' },
  { path: 'tracker', loadComponent: () => import('./job-tracker.component').then(m => m.JobTrackerComponent), title: 'Job Tracker' },
  { path: 'analytics', loadComponent: () => import('./job-analytics.component').then(m => m.JobAnalyticsComponent), title: 'Job Analytics' }
];
