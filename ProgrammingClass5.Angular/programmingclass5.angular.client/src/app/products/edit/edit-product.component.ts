import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  private readonly _productService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public product: Product = {};

  constructor(
    productService: ProductService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    this._productService = productService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._productService.get(parseInt(id))
        .subscribe(product => {
          this.product = product;
        });
    }
  }

  public saveData(productForm: NgForm): void {
    if (productForm.valid) {
      this._productService.update(this.product)
        .subscribe(() => {
          this._router.navigate(['/products']);
        })
    }
  }
}
