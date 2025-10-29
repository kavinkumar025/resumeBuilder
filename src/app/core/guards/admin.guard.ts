import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// TODO: Wire up with actual role-based access using AuthService and Firestore.
function isAdmin(): boolean {
  // Placeholder: default to false to prevent accidental exposure.
  return false;
}

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (isAdmin()) return true;
  router.navigateByUrl('/admin/login');
  return false;
};
