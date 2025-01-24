import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductType } from "../../shared/models/product-type";

@Component({
  templateUrl: './product-type-list.component.html'
})
export class ProductTypeListComponent implements OnInit {
  private _httpClient: HttpClient;

  public productTypes: ProductType[] = [];

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
  }

  public ngOnInit(): void {
    this._httpClient.get<ProductType[]>('/api/productTypes')
      .subscribe(productTypes => {
        this.productTypes = productTypes;
      });
  }
}
