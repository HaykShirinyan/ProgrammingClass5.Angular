import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/Manufacturer";


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

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;

    this.manufacturers = await this._manufacturerService.getAll();
    this.isLoading = false;
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

  public deleteManufacturer(id: number): void {
    this._manufacturerService.delete(id).subscribe(() => {
      this.manufacturers = this.manufacturers.filter(m => m.id !== id);
      });
  }
}
