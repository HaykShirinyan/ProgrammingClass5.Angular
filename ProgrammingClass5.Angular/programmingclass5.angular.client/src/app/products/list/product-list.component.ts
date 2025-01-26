import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  private readonly _productService: ProductService;

  public products: Product[] = [];

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  public ngOnInit(): void {
    this._productService.getAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}
