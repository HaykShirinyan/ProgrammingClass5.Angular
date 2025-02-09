import { provideHttpClient, } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './products/create/create-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { TypeListComponent } from './types/list/type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';
import { CreateManufacturerComponent } from './products/create/create-manufacturer.component';
import { EditManufacturerComponent } from './products/edit/edit-manufacturer.component';
import { CreateTypeComponent } from './products/create/create-type.component';
import { EditTypeComponent } from './products/edit/edit-type.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    TypeListComponent,
    CreateTypeComponent,
    EditTypeComponent,
    ManufacturerListComponent,
    CreateManufacturerComponent,
    EditManufacturerComponent,

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
