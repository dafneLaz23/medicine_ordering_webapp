import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineService } from '../../../services/medicine.service';
import { Medicine } from '../../../models/medicine.model';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from '../../../services/order.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-view-medicines',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {
  medicines: Medicine[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private medicineService: MedicineService, private orderService: OrderService, private cartService: CartService) {}


  ngOnInit(): void {
    this.medicineService.getAllMedicines().subscribe({
      next: (data) => {
        this.medicines = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching medicines:', err);
        this.errorMessage = 'Failed to load medicines';
        this.isLoading = false;
      }
    });
  }
  
  addToOrder(medicine: any) {
    this.orderService.addToOrder(medicine);
    alert(`${medicine.name} added to your order.`);
  }
  
  addToCart(medicine: Medicine): void {
     this.cartService.addToCart(medicine);
     alert(`${medicine.name} added to cart`);
   }
}
