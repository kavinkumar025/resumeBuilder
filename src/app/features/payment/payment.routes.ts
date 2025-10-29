import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const routes: Routes = [
  { path: 'pricing', loadComponent: () => import('./pricing.component').then(m => m.PricingComponent), title: 'Pricing' },
  { path: 'payment', children: [
      { path: 'success', canActivate: [authGuard], loadComponent: () => import('./payment-success.component').then(m => m.PaymentSuccessComponent), title: 'Payment Success' },
      { path: 'history', canActivate: [authGuard], loadComponent: () => import('./payment-history.component').then(m => m.PaymentHistoryComponent), title: 'Payment History' }
    ]
  }
];
