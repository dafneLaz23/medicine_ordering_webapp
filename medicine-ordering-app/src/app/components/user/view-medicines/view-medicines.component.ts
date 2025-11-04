import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineService } from '../../../services/medicine.service';
import { Medicine } from '../../../models/medicine.model';
import { HttpClientModule } from '@angular/common/http';

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

  constructor(private medicineService: MedicineService) {}

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
}
