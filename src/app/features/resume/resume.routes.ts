import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'input' },
  { path: 'input', loadComponent: () => import('./ai-input.component').then(m => m.AiInputComponent), title: 'AI Resume Input' },
  { path: 'preview', loadComponent: () => import('./ai-preview.component').then(m => m.AiPreviewComponent), title: 'AI Resume Preview' },
  { path: 'templates', loadComponent: () => import('./template-selection.component').then(m => m.TemplateSelectionComponent), title: 'Templates' },
  { path: 'ats-check', loadComponent: () => import('./ats-check.component').then(m => m.AtsCheckComponent), title: 'ATS Check' },
  { path: 'editor', loadComponent: () => import('./resume-editor.component').then(m => m.ResumeEditorComponent), title: 'Resume Editor' },
  { path: 'download', loadComponent: () => import('./resume-download.component').then(m => m.ResumeDownloadComponent), title: 'Download Resume' },
  { path: 'history', loadComponent: () => import('./resume-history.component').then(m => m.ResumeHistoryComponent), title: 'Resume History' }
];
