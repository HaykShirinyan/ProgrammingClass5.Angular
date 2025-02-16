import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Manufacturer } from "../../shared/models/manufacturer";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: './edit-manufacturer.component.html'
})
export class EditManufacturerComponent implements OnInit { 
  private readonly _manufacturerService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router

  public manufacturer: Manufacturer = {};
  public isLoading: boolean = false;

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
    this.isLoading = false;
    
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._manufacturerService.get(parseInt(id))

        .subscribe(manufacturer => {
          this.isLoading = false;
          this.manufacturer = manufacturer;
        });
    }
  }

  public saveData(manufacturerForm: NgForm): void {
    if (manufacturerForm.valid) {
      this.isLoading = true;
      this._manufacturerService.update(this.manufacturer)
        .subscribe(() => {
          this._router.navigate(['/manufacturers']);
          this.isLoading = false;
        })
    }
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

 
    
}
