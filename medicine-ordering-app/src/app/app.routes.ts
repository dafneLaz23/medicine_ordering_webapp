import { Routes } from '@angular/router';
import { AddMedicineComponent } from './components/admin/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from './components/user/view-medicines/view-medicines.component';
import { ManageMedicinesComponent } from './components/admin/manage-medicines/manage-medicines.component';
import { LoginComponent } from './components/shared/login/login.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';  // ✅ new import
import { CartComponent } from './components/user/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'view-medicines', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'view-medicines', component: ViewMedicinesComponent },
  { path: 'login', component: LoginComponent },

  // ✅ Only admins can access these routes
  {
    path: 'add-medicine',
    component: AddMedicineComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'manage-medicine',
    component: ManageMedicinesComponent,
    canActivate: [adminGuard]
  }
];
