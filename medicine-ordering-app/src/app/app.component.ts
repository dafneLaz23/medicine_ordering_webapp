import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AddMedicine } from './components/admin/add-medicine/add-medicine.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
	       CommonModule,
	       HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicine-ordering-app';
}
