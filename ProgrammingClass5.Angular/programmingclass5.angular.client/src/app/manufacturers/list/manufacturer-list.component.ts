import { Component, Injectable, OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private readonly _manufacturerService: ManufacturerService;

  public manufacturers: Manufacturer[] = [];
  public isLoading: boolean = false;

  constructor(manufacturerService: ManufacturerService) {
    this._manufacturerService = manufacturerService;
  }

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;

    this.manufacturers = await this._manufacturerService.getAll();
    this.isLoading = false;
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

  public async deleteManufacturer(id: number): Promise<void> {
    if (confirm("Are you sure you want to delete this manufacturer?")) {
      await this._manufacturerService.delete(id);
      this.manufacturers = this.manufacturers.filter(manufacturer => manufacturer.id !== id);
    }
  }
}
