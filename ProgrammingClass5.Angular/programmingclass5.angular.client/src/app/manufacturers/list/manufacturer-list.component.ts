import { Component, OnInit } from "@angular/core";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/manufacturer";
import { Router } from '@angular/router';

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private readonly _manufacturerService: ManufacturerService;
  private readonly _router: Router;

  public manufacturers: Manufacturer[] = [];
  public isLoading: boolean = false;
  constructor(manufacturerService: ManufacturerService, router: Router) {
    this._manufacturerService = manufacturerService;
    this._router = router;
  }

  public async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.manufacturers = await this._manufacturerService.getAll();
    this.isLoading = false;
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

  public async deleteManufacturer(id?: number): Promise<void> {
    if (id === undefined) {
      console.error("Manufacturer ID is undefined.");
      return;
    }
  
    if (confirm("Are you sure you want to delete this manufacturer?")) {
      await this._manufacturerService.delete(id)
      this.loadManufacturers(); 

    }
  }

  private async loadManufacturers(): Promise<void> {
    this.manufacturers=await this._manufacturerService.getAll()
  }

  public async deleteAllManufacturers(): Promise<void> {
    await this._manufacturerService.deleteAll();
    this.manufacturers = [];
  }


}

