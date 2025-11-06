import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    // Not logged in → redirect to login
    router.navigate(['/login']);
    return false;
  }

  if (!authService.isAdminUser()) {
    // Logged in but not admin → redirect to user view
    router.navigate(['/view-medicines']);
    return false;
  }

  // ✅ Logged in and admin → allow access
  return true;
};
