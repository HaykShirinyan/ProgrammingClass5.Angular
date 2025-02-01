import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductTypeListComponent } from './productTypes/list/productType-list.component';
import { ManufacturerListComponent } from "./manufacturers/list/ManufacturerListComponent";


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'productTypes',
    component: ProductTypeListComponent
  },
  {
    path: 'manufacturers',
    component: ManufacturerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
