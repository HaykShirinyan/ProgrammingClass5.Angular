import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  private _http: HttpClient;

  public products: Product[] = [];

  constructor(http: HttpClient) {
    this._http = http
  }

  public ngOnInit(): void {
    this._http.get<Product[]>('/api/products')
      .subscribe(products => {
        this.products = products;
      });
  }
}
