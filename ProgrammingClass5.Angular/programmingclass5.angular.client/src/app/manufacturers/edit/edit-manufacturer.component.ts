import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Manufacturer } from "../../shared/models/Manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";

@Component({
  templateUrl: './edit-manufacturer.component.html'
})
export class EditManufacturerComponent implements OnInit {
  private readonly _manufacturerService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public manufacturer: Manufacturer = {
      id: 0,
      name: ""
  };

  constructor(
    manufacturerService: ManufacturerService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    this._manufacturerService = manufacturerService;
    this._activatedRoute = activatedRoute;
    this._router = router;
  }

  public ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._manufacturerService.get(parseInt(id))
        .subscribe(manufacturer => {
          this.manufacturer = manufacturer;
        });
    }
  }

  public save(form: NgForm): void {
    if (form.valid) {
      this._manufacturerService.update(this.manufacturer)
        .subscribe(() => {
          this._router.navigate(['/manufacturers']);
        })
    }
  }
}
