import { Routes } from '@angular/router';
import { AddMedicineComponent} from './components/admin/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from './components/user/view-medicines/view-medicines.component';
//import { Orders } from './components/orders/orders.component';
import { ManageMedicinesComponent } from './components/admin/manage-medicines/manage-medicines.component';
import { loginComponent } from './components/shared/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:  loginComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'view-medicines', component: ViewMedicinesComponent }
];
