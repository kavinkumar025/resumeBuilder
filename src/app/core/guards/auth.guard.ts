import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// TODO: Wire up with real AuthService once Firebase is integrated.
function isLoggedIn(): boolean {
  // Placeholder: always allow. Replace with actual auth state check.
  return true;
}

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (isLoggedIn()) return true;
  router.navigateByUrl('/login');
  return false;
};

export const authMatchGuard: CanMatchFn = () => {
  return isLoggedIn();
};
