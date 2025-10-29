import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'generate' },
  { path: 'generate', loadComponent: () => import('./cover-letter-generate.component').then(m => m.CoverLetterGenerateComponent), title: 'Generate Cover Letter' },
  { path: 'edit', loadComponent: () => import('./cover-letter-edit.component').then(m => m.CoverLetterEditComponent), title: 'Edit Cover Letter' }
];
