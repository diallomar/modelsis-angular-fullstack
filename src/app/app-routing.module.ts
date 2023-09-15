import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductTypeCreateComponent } from './productTypes/product-type-create/product-type-create.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'index.html', component: ProductsListComponent },
  {path:'productType', component: ProductTypeCreateComponent},
  { path: 'products', component: ProductsCreateComponent },
  { path: 'products/:id', component: ProductsEditComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
