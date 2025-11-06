import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { medicine: Medicine; quantity: number }[] = [];

  addToCart(medicine: Medicine): void {
    const existingItem = this.cartItems.find(item => item.medicine.id === medicine.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ medicine, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(medicineId: number): void {
    this.cartItems = this.cartItems.filter(item => item.medicine.id !== medicineId);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.medicine.price * item.quantity,
      0
    );
  }
}
