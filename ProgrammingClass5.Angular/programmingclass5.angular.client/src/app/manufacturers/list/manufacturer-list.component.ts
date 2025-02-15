import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private readonly _manufacturerService: ManufacturerService;

  public manufacturers: Manufacturer[] = [];
  public isLoding: boolean = false;

  constructor(manufacturerService: ManufacturerService) {
    this._manufacturerService: manufacturerService;
  }

  public ngOnInit(): void {
    this.isLoding = true;

    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
        this.isLoding = false;
      }) 
  }

  public hideSpinner(): void {
    this.isLoding = false;
  }
}
