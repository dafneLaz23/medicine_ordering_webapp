import { Component } from '@angular/core';
import { MedicineService } from '../../../services/medicine.service';
import { Medicine } from '../../../models/medicine.model';

@Component({
  selector: 'app-add-medicine',
  //imports: [],
  templateUrl: './add-medicine.html',
  styleUrl: './add-medicine.css',
})

export class AddMedicine {

  medicine: Medicine = {
    name: '',
    description: '',
    price: 0,
	category: '',
    stock_quantity: 0,
	image_url: ''
  };

  selectedFile?: File;

  constructor(private medicineService: MedicineService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.medicine.name);
    formData.append('description', this.medicine.description);
    formData.append('price', this.medicine.price.toString());
    formData.append('stock', this.medicine.stock_quantity.toString());

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.medicineService.addMedicine(formData).subscribe({
      next: (response) => {
        alert('Medicine added successfully!');
        console.log(response);
      },
      error: (err) => {
        console.error('Error adding medicine:', err);
        alert('Failed to add medicine');
      }
    });
  }
}
