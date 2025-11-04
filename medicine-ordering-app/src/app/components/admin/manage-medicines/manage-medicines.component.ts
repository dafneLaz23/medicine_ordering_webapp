import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-medicines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-medicines.component.html',
  styleUrls: ['./manage-medicines.component.css']
})
export class ManageMedicinesComponent implements OnInit {

  medicines: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchMedicines();
  }

  fetchMedicines() {
    this.http.get<any[]>('http://localhost:8080/api/medicines').subscribe({
      next: (data) => this.medicines = data,
      error: (err) => console.error('Error fetching medicines', err)
    });
  }

  onEdit(medicineId: number) {
    this.router.navigate(['/add-medicine'], { queryParams: { id: medicineId } });
  }

  onDelete(medicineId: number) {
    if (confirm('Are you sure you want to delete this medicine?')) {
      this.http.delete(`http://localhost:8080/api/medicines/${medicineId}`).subscribe({
        next: () => {
          alert('Medicine deleted successfully!');
          this.fetchMedicines(); // refresh list
        },
        error: (err) => console.error('Error deleting medicine', err)
      });
    }
  }
}
