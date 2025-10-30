
  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { importProvidersFrom } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
  import { RouterModule, Routes } from '@angular/router';

  import { AddMedicine } from './app/components/admin/add-medicine/add-medicine.component';
  //import { ManageMedicinesComponent } from './app/components/admin/manage-medicines/manage-medicines.component';

  const routes: Routes = [
    { path: '', redirectTo: 'manage-medicines', pathMatch: 'full' },
    { path: 'add-medicine', component: AddMedicine },
    //{ path: 'manage-medicines', component: ManageMedicinesComponent }
  ];

  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(HttpClientModule, RouterModule.forRoot(routes))
    ]
  }).catch(err => console.error(err));
