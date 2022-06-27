import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AddEditStoreComponent } from './add-edit-store/add-edit-store.component';
import { ShowStoreComponent } from './show-store/show-store.component';
import { ProductsComponent } from './products/products.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AddEditStoreComponent,
    ShowStoreComponent,
    ProductsComponent,
    ShowProductsComponent,
    AddProductsComponent,
    SignupComponent,
    AdminComponent,
    AdminloginComponent,
    ContactpageComponent,
    NavBarComponent,
    SearchProductsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
