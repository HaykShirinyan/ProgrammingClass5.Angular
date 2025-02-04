import { Component, OnInit } from "@angular/core";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/manufacturer";

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private readonly _manufacturerService: ManufacturerService;

  public manufacturers: Manufacturer[] = [];
  constructor(manufacturerService: ManufacturerService) {
    this._manufacturerService = manufacturerService;
  }

  public ngOnInit(): void {
    this._manufacturerService.getAll()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
      })
  }
}

