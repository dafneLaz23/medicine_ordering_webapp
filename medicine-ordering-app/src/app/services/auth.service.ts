import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = false;
  private isAdmin = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.loggedIn = true;
      this.isAdmin = true;
      return true;
    } else if (username === 'user' && password === 'user123') {
      this.loggedIn = true;
      this.isAdmin = false;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
