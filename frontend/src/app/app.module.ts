import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductFormComponent } from './components/product-form.component';
import { HomeComponent } from './components/home.component';
import { ProductCatalogComponent } from './components/product-catalog.component';
import { ProductDetailsComponent } from './components/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    AdminDashboardComponent,
    ProductListComponent,
    ProductFormComponent,
    HomeComponent,
    ProductCatalogComponent,
    ProductDetailsComponent
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
