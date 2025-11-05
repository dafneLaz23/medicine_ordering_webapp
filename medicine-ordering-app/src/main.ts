import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AddMedicineComponent } from './app/components/admin/add-medicine/add-medicine.component';
import { ViewMedicinesComponent } from './app/components/user/view-medicines/view-medicines.component';
import { ManageMedicinesComponent } from './app/components/admin/manage-medicines/manage-medicines.component';
import { loginComponent } from './app/components/shared/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'view-medicines', pathMatch: 'full' },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'view-medicines', component: ViewMedicinesComponent },
  //{ path: 'manage-medicines', component: ManageMedicinesComponent},
  { path: 'login', component: loginComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));
