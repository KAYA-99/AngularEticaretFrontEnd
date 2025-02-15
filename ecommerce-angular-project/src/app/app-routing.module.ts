import { Product2Component } from './general/product2/product2.component';
import { Product1Component } from './general/product1/product1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './general/about/about.component';
import { ContactComponent } from './general/contact/contact.component';
import { HomeComponent } from './general/home/home.component';
import { LoginComponent } from './general/login/login.component';
import { ProductDetailsComponent } from './general/product-details/product-details.component';
import { ProductsComponent } from './general/products/products.component';
import { RegisterComponent } from './general/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"product-details", component:ProductDetailsComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"product1",component:Product1Component},
  {path:"product2",component:Product2Component},

  // {path:"admin", loadChildren:()=>import('./admin/admin.module').then(
  //   m=>m.AdminModule
  // )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
