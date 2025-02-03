import { Component } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-manufacturer.component.html'
})
export class CreateManufacturerComponent {
  private readonly _manufacturerService: ManufacturerService;
  private readonly _router: Router;

  public manufacturer: Manufacturer = {};

  constructor(manufacturerService: ManufacturerService, router: Router) {
    this._manufacturerService = manufacturerService;
    this._router = router;
  }

  public saveData(manufacturerForm: NgForm): void {
    if (manufacturerForm.valid) {
      this._manufacturerService.add(this.manufacturer)
        .subscribe(() => {
          this._router.navigate(['/manufacturers']);
        });
    }
  }
}
