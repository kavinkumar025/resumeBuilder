import { Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./admin-login.component').then(m => m.AdminLoginComponent), title: 'Admin Login' },
  { path: 'users', canActivate: [adminGuard], loadComponent: () => import('./admin-users.component').then(m => m.AdminUsersComponent), title: 'Users' },
  { path: 'templates', canActivate: [adminGuard], loadComponent: () => import('./admin-templates.component').then(m => m.AdminTemplatesComponent), title: 'Templates' },
  { path: 'analytics', canActivate: [adminGuard], loadComponent: () => import('./admin-analytics.component').then(m => m.AdminAnalyticsComponent), title: 'Revenue Analytics' }
];
