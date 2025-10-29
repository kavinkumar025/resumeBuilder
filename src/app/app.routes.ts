import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

// Top-level routes with lazy-loaded feature route arrays.
export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },

	// Public auth routes
	{
		path: '',
		loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.routes)
	},

	// Profile setup (protected)
	{
		path: 'profile',
		canActivate: [authGuard],
		loadChildren: () => import('./features/profile/profile.routes').then(m => m.routes)
	},

	// Resume builder (protected)
	{
		path: 'resume',
		canActivate: [authGuard],
		loadChildren: () => import('./features/resume/resume.routes').then(m => m.routes)
	},

	// Cover letter (protected)
	{
		path: 'cover-letter',
		canActivate: [authGuard],
		loadChildren: () => import('./features/cover-letter/cover-letter.routes').then(m => m.routes)
	},

	// Jobs (protected)
	{
		path: 'jobs',
		canActivate: [authGuard],
		loadChildren: () => import('./features/jobs/jobs.routes').then(m => m.routes)
	},

	// Payment & pricing (protected for history/success; pricing is public)
	{
		path: '',
		loadChildren: () => import('./features/payment/payment.routes').then(m => m.routes)
	},

	// Public marketing & help
	{
		path: 'home',
		loadChildren: () => import('./features/landing/landing.routes').then(m => m.routes)
	},
	{
		path: 'help',
		loadChildren: () => import('./features/help/help.routes').then(m => m.routes)
	},

	// Dashboard (protected)
	{
		path: '',
		canActivate: [authGuard],
		loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)
	},

	// Admin
	{
		path: 'admin',
		children: [
			{
				path: '',
				loadChildren: () => import('./features/admin/admin.routes').then(m => m.routes)
			}
		]
	},

	// Fallback
	{ path: '**', redirectTo: 'home' }
];
