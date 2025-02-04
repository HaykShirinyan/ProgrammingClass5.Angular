import { provideHttpClient, } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/list/product-list.component';
import { TypeListComponent } from './types/list/type-list.component';
import { ManufacturerListComponent } from './manufacturers/list/manufacturer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TypeListComponent,
    ManufacturerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
