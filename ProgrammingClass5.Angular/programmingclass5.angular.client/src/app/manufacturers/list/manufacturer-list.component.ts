import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";
import { Product } from "../../shared/models/product";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { ProductService } from "../../shared/services/product.service";

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private readonly _manufacturerService: ManufacturerService;

  public manufacturers: Manufacturer[] = [];
  public isLoading: boolean = false;

  constructor(manufacturerService: ManufacturerService) {
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    this.isLoading = true;

    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
        this.isLoading = false;
      });
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }
}
