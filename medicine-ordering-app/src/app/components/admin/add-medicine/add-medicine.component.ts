import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-medicine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicine: any = {
    name: '',
    description: '',
    price: null,
    stock_quantity: null
	
  };

  imageFile?: File;
  isEditMode = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Check for ID in query params
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadMedicine(id);
      }
    });
  }

  loadMedicine(id: number) {
    this.http.get<any>(`http://localhost:8080/api/medicines/${id}`).subscribe({
      next: (data) => this.medicine = data,
      error: (err) => console.error('Error loading medicine:', err)
    });
  }

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.medicine.name);
    formData.append('description', this.medicine.description);
    formData.append('price', this.medicine.price);
    formData.append('stock_quantity', this.medicine.stock_quantity);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    if (this.isEditMode) {
      // PUT request for updates
      this.http.put(`http://localhost:8080/api/medicines/${this.medicine.id}`, this.medicine).subscribe({
        next: () => alert('Medicine updated successfully!'),
        error: (err) => console.error('Error updating medicine:', err)
      });
    } else {
      // POST request for new medicine
      this.http.post('http://localhost:8080/api/medicines/add', formData).subscribe({
        next: () => alert('Medicine added successfully!'),
        error: (err) => console.error('Error adding medicine:', err)
      });
    }
  }
}
