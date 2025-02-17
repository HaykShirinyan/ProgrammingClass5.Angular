import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { ProductType } from "../../shared/models/product-type";
import { ProductTypeService } from "../../shared/services/product-type.service";

@Component({
  templateUrl: './product-type-list.component.html'
})

export class ProductTypeListComponent implements OnInit {
  private readonly _productTypeService: ProductTypeService;

  public productTypes: ProductType[] = [];
  public isLoading: boolean = false;

  constructor(productTypeService: ProductTypeService) {
    this._productTypeService = productTypeService;
  }

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;

    this.productTypes = await this._productTypeService.getAll();
    this.isLoading = false
      
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

  public async deleteProductType(id: number): Promise<void> {
    if (confirm("Are you sure you want to delete this productType?")) {
      await this._productTypeService.delete(id);
      this.productTypes = this.productTypes.filter(productType => productType.id !== id);
    }
  }
}
