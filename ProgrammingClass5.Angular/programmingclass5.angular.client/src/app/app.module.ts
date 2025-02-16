import { provideHttpClient, } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { ProductTypeListComponent } from './productTypes/list/productType-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';
import { CreateProductTypeComponent } from './productTypes/create/create-productType.component';
import { EditProductTypeComponent } from './productTypes/edit/edit-productType.component';
import { CreateManufacturerComponent } from './manufacturers/create/create-manufacturer.component';
import { EditManufacturerComponent } from './manufacturers/edit/edit-manufacturer.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductListComponent,
    ProductTypeListComponent,
    CreateProductTypeComponent,
    EditProductTypeComponent,
    ManufacturerListComponent,
    CreateManufacturerComponent,
    EditManufacturerComponent
    EditProductComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
