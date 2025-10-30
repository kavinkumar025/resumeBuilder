import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'choose'
  },
  {
    path: 'choose',
    loadComponent: () => import('./choose-profile.component').then(m => m.ChooseProfileComponent),
    title: 'Choose Profile'
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
  },
  {
    path: 'sections',
    loadComponent: () => import('./sections-manager.component').then(m => m.SectionsManagerComponent),
    title: 'Sections'
  },
  {
    path: 'reorder',
    loadComponent: () => import('./reorder-headings.component').then(m => m.ReorderHeadingsComponent),
    title: 'Rearrange Headings'
  }
];
