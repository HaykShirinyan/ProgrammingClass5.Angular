import { Component } from "@angular/core";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Manufacturer } from "../../shared/models/Manufacturer";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './create-manufacturer.component.html'
})
export class CreateManufacturerComponent {
  private readonly _manufacturerService: ManufacturerService;
  private readonly _router: Router;

  public manufacturer: Manufacturer = {
      id: 0,
      name: ""
  };

  constructor(manufacturerService: ManufacturerService, router: Router) {
    this._manufacturerService = manufacturerService;
    this._router = router;
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this._manufacturerService.add(this.manufacturer)
        .subscribe(() => {
          this._router.navigate(['/manufacturers']);
        });
    }
  }
}
