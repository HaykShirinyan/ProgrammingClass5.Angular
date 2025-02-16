import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { ProductTypeListComponent } from './productTypes/list/product-type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';
import { CreateProductTypeComponent } from './productTypes/create/create-productType.component';
import { EditProductTypeComponent } from './productTypes/edit/edit-productType.component';
import { CreateManufacturerComponent } from './manufacturers/create/create-manufacturer.component';
import { EditManufacturerComponent } from './manufacturers/edit/edit-manufacturer.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'productTypes',
    component: ProductTypeListComponent
  },
  {
    path: 'productTypes/create',
    component: CreateProductTypeComponent
  },
  {
    path: 'productTypes/edit/:id',
    component: EditProductTypeComponent
  },
  {
    path: 'manufacturers',
    component: ManufacturerListComponent
  },
  {
    path: 'manufacturers/create',
    component: CreateManufacturerComponent
  },
  {
    path: 'manufacturers/edit/:id',
    component: EditManufacturerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
