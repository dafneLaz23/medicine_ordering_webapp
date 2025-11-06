import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private items: any[] = [];

  addToOrder(medicine: any) {
    const existingItem = this.items.find(item => item.id === medicine.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...medicine, quantity: 1 });
    }
  }

  getOrderItems() {
    return this.items;
  }

  clearOrder() {
    this.items = [];
  }
}
