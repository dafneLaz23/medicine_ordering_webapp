import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = false;
  private isAdmin = false;
  private username = '';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.loggedIn = true;
      this.isAdmin = true;
	  this.username = username; 
      return true;
    } else if (username === 'user' && password === 'user123') {
      this.loggedIn = true;
      this.isAdmin = false;
	  this.username = username;
      return true;
    } else {
      this.loggedIn = false;
      return false;
    }
  }
  
  
  logout(): void {
    this.loggedIn = false;
    this.isAdmin = false;
	this.username = '';
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
  
  getUsername(): string {
      return this.username;
    }
}
