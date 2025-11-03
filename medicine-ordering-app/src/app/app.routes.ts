import { Routes } from '@angular/router';
import { AddMedicine} from './components/admin/add-medicine/add-medicine.component';
//import { ViewMedicines } from './components/admin/view-medicines/view-medicines.component';
//import { Orders } from './components/orders/orders.component';

export const routes: Routes = [
  { path: '', redirectTo: '/medicines', pathMatch: 'full' },
  { path: 'add-medicine', component: AddMedicine },
 // { path: 'medicines', component: ViewMedicinesComponent },
 // { path: 'orders', component: OrdersComponent }
];
