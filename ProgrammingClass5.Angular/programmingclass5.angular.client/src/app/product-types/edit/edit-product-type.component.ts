import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductType } from "../../shared/models/product-type";
import { ProductTypeService } from "../../shared/services/product-type.service";

@Component({
  templateUrl: './edit-product-type.component.html'
})
export class EditProductTypeComponent implements OnInit {
  private readonly _productTypeService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public productType: ProductType = {
      id: 0,
      name: "",
      description: ""
  };

  constructor(
    productTypeService: ProductTypeService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    this._productTypeService = productTypeService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._productTypeService.get(parseInt(id))
        .subscribe(productType => {
          this.productType = productType;
        });
    }
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this._productTypeService.update(this.productType)
        .subscribe(() => {
          this._router.navigate(['/productTypes']);
        })
    }
  }
}
