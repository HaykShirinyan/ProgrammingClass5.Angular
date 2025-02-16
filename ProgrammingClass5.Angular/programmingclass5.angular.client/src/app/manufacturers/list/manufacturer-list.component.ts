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

  public deleteManufacturer(id?: number): void {
    if (id === undefined) {
      console.error("Manufacturer ID is undefined.");
      return;
    }

    if (confirm("Are you sure you want to delete this manufacturer?")) {
      this._manufacturerService.delete(id).subscribe(() => {
      
        this.loadManufacturers();
      });
    }
  }

  private loadManufacturers(): void {
    this._manufacturerService.getAll().subscribe((data) => {
      this.manufacturers = data;
    });
  }
  public deleteAllManufacturers(): void {
    this._manufacturerService.deleteAll().subscribe(() => {
      this.manufacturers = []; 
    });
  }


}

