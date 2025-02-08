import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductType } from "../../shared/models/productType";

@Component({
  templateUrl: './productType-list.component.html'
})
export class ProductTypeListComponent implements OnInit {
  private _http: HttpClient;

  public productTypes: ProductType[] = [];

  constructor(http: HttpClient) {
    this._http = http
  }

  public ngOnInit(): void {
    this._http.get<ProductType[]>('/api/productTypes')
      .subscribe(productTypes => {
        this.productTypes = productTypes;
      });
  }
}
