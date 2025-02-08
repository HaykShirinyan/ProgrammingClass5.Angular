import { Component } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent {
  private readonly _productService: ProductService;
  private readonly _router: Router;

  public product: Product = {};

  constructor(productService: ProductService, router: Router) {
    this._productService = productService;
    this._router = router;
  }

  public saveData(productForm: NgForm): void {
    if (productForm.valid) {
      this._productService.add(this.product)
        .subscribe(() => {
          this._router.navigate(['/products']);
        });
    }
  }
}
