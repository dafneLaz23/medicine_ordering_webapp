import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- REQUIRED for ngModel
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // <-- Add this
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class loginComponent {
  username = '';
  password = '';
  private loggedIn = false;
  private isAdmin = false;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post('http://localhost:8080/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        if (res.role === 'ADMIN') {
          this.router.navigate(['/add-medicine']);
        } else {
          this.router.navigate(['/view-medicines']);
        }
      },
      error: () => alert('Invalid username or password')
    });
  }

    login(username: string, password: string): boolean {
      // Simple static check — replace with real validation later
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
