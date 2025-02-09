import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { TypeListComponent } from './types/list/type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';
import { CreateManufacturerComponent } from './products/create/create-manufacturer.component';
import { EditManufacturerComponent } from './products/edit/edit-manufacturer.component';
import { CreateTypeComponent } from './products/create/create-type.component';
import { EditTypeComponent } from './products/edit/edit-type.component';


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
    path: 'types',
    component: TypeListComponent
  },
  {
    path: 'types/create',
    component: CreateTypeComponent

  },
  {
    path: 'types/edit/:id',
    component: EditTypeComponent
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
