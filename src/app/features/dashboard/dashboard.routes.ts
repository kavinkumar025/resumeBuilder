import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./home-dashboard.component').then(m => m.HomeDashboardComponent), title: 'Dashboard' },
  { path: 'notifications', loadComponent: () => import('./notifications.component').then(m => m.NotificationsComponent), title: 'Notifications' },
  { path: 'settings', loadComponent: () => import('./settings.component').then(m => m.SettingsComponent), title: 'Settings' }
];
