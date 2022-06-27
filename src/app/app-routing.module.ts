import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { AddEditStoreComponent } from './add-edit-store/add-edit-store.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowStoreComponent } from './show-store/show-store.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'store',component:StoreComponent},
  {path:'products',component:ProductsComponent},
  {path:'admin',component:AdminComponent},
  {path:'ShowProducts',component:ShowProductsComponent},
  {path:'ShowStore',component:ShowStoreComponent},
  {path:'AddProducts',component:AddProductsComponent},
  {path:'AddEditStore',component:AddEditStoreComponent},
  {path:'user',component:UserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
