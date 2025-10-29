import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'info'
  },
  {
    path: 'info',
    loadComponent: () => import('./user-info-form.component').then(m => m.UserInfoFormComponent),
    title: 'Profile Info'
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience-skills.component').then(m => m.ExperienceSkillsComponent),
    title: 'Experience & Skills'
  }
];
