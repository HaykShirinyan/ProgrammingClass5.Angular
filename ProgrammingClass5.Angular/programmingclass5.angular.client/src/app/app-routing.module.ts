import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { TypeListComponent } from './types/list/type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'type',
    component: TypeListComponent
  },
  {
    path: 'manufacturer',
    component: ManufacturerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
