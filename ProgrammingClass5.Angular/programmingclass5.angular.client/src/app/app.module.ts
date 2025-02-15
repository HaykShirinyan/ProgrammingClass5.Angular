import { provideHttpClient, } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { ProductTypeListComponent } from './product-types/list/product-type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';
import { EditProductTypeComponent } from './product-types/edit/edit-product-type.component';
import { CreateProductTypeComponent } from './product-types/create/create-product-type.component';
import { CreateManufacturerComponent } from './manufacturers/create/create-manufacturer.component';
import { EditManufacturerComponent } from './manufacturers/edit/edit-manufacturer.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { DeleteButtonComponent } from './shared/components/delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductTypeListComponent,
    ManufacturerListComponent,
    EditProductTypeComponent,
    CreateProductTypeComponent,
    CreateManufacturerComponent,
    EditManufacturerComponent,
    LoadingSpinnerComponent,
    DeleteButtonComponent
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
