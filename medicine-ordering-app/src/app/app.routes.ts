import { Routes } from '@angular/router';
import { AddMedicineComponent} from './components/admin/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from './components/user/view-medicines/view-medicines.component';
//import { Orders } from './components/orders/orders.component';
import { ManageMedicinesComponent } from './components/admin/manage-medicines/manage-medicines.component';

export const routes: Routes = [
  { path: '', redirectTo: 'view-medicines', pathMatch: 'full' },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'view-medicines', component: ViewMedicinesComponent },
  { path: 'manage-medicines', component: ManageMedicinesComponent },
];
