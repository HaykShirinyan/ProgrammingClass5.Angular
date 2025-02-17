import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";

@Component({
  selector: 'app-product-list',
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

  public async deleteProduct(id: number): Promise<void> {
    if (confirm("Are you sure you want to delete this product?")) {
      await this._productService.delete(id);
      this.products = this.products.filter(product => product.id !== id);
    }
  }
}
