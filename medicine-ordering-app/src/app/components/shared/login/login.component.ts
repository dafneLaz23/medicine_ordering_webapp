import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] 
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      if (this.authService.isAdminUser()) {
        this.router.navigate(['/add-medicine']);
      } else {
        this.router.navigate(['/view-medicines']);
      }
    } else {
      alert('Invalid credentials. Try again.');
    }
  }
}
