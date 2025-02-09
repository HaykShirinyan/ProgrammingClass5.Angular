import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductTypeService } from "../../shared/services/product-type.service";
import { ProductType } from "../../shared/models/product-type";

@Component({
  templateUrl: './create-product-type.component.html'
})
export class CreateProductTypeComponent {
  private readonly _productTypeService: ProductTypeService;
  private readonly _router: Router;

  public productType: ProductType = {
      id: 0,
      name: "",
      description: ""
  };

  constructor(productTypeService: ProductTypeService, router: Router) {
    this._productTypeService = productTypeService;
    this._router = router;
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this._productTypeService.add(this.productType)
        .subscribe(() => {
          this._router.navigate(['/productTypes']);
        });
    }
  }
}
