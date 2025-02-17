import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  private readonly _productService: ProductService;

  public products: Product[] = [];
  public isLoading: boolean = false;
  constructor(productService: ProductService) {
    this._productService = productService;
  }

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;

    this.products = await this._productService.getAll();
    this.isLoading = false;
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }
  public deleteProduct(id: number): void {
    this._productService.delete(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }
}
