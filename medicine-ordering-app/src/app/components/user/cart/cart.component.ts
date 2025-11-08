import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // ✅ if you track logged-in users

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private authService: AuthService // ✅ optional but recommended
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  checkout() {
    const orderPayload = {
      customerName: this.authService.getUsername ? this.authService.getUsername() : 'Guest User',
      items: this.cartItems.map(item => ({
        medicineId: item.medicine.id, 
        quantity: item.quantity
      }))
    };

    this.http.post('http://localhost:8080/api/orders/create', orderPayload, { responseType: 'json' })
      .subscribe({
        next: (response) => {
          console.log('✅ Order created successfully:', response);
          alert('Order placed successfully!');
          this.cartService.clearCart();
          this.cartItems = [];
        },
        error: (err) => {
          console.error('❌ Error creating order:', err);
          alert('Order failed. Please try again.');
        }
      });
  }

}
