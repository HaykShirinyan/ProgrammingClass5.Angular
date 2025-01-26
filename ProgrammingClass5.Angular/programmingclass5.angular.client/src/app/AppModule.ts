import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ManufacturerListComponent } from "./manufacturers/list/manufacturer-list.component";
import { ProductListComponent } from "./products/list/product-list.component";
import { ProductTypeListComponent } from "./productTypes/list/productType-list.component";



@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductTypeListComponent,
        ManufacturerListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
