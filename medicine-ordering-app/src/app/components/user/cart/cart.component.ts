import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private http: HttpClient) {}

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
      customerName: 'Guest User', // or use logged-in user's name
      items: this.cartItems.map(item => ({
        medicine: { id: item.medicine.id },
        quantity: item.quantity
      }))
    };

    this.http.post('http://localhost:8080/api/orders/create', orderPayload)
      .subscribe({
        next: () => {
          alert('Order placed successfully!');
          this.cartService.clearCart();
          this.cartItems = [];
        },
        error: (err) => {
          console.error('Error creating order:', err);
          alert('Order failed.');
        }
      });
  }
}
