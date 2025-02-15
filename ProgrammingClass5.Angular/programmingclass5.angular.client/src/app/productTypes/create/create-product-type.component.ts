import { Component } from "@angular/core";
import { ProductType } from "../../shared/models/product-type";
import { ProductTypeService } from "../../shared/services/product-type.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: "./create-productType.component.html"
})

export class CreateProductTypeComponent {
  private readonly _productTypeService: ProductTypeService;
  private readonly _router: Router;

  public productType: ProductType = {};

  constructor(productTypeService: ProductTypeService, router: Router) {
    this._productTypeService = productTypeService;
    this._router = router;
  }

  public saveData(productTypeForm: NgForm): void {
    if (productTypeForm.valid) {
      this._productTypeService.add(this.productType)
        .subscribe(() => {
          this._router.navigate(['/productTypes']);
        });
    }
  }
}
