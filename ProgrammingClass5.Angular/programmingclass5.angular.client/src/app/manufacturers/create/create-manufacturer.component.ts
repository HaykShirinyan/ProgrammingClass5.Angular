import { Component } from "@angular/core";
import { ManufacturerService } from "../../shared/services/manufacturer.service";
import { Router } from "@angular/router";
import { Manufacturer } from "../../shared/models/manufacturer";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl:'./create-manufacturer.component.html'
})
export class CreateManufacturerComponent {
  private readonly _manufacturerService: ManufacturerService;
  private readonly _router: Router;

  
  public manufacturer: Manufacturer = {};
  public isLoading: boolean = false;
  constructor(manufacturerService: ManufacturerService, router: Router) {
    this._manufacturerService = manufacturerService
    this._router = router;

}
  public async saveData(manufacturerForm: NgForm):Promise<void> {
    
    if (manufacturerForm.valid) {
      this.isLoading = true;
       await this._manufacturerService.add(this.manufacturer)
          this.isLoading = false;
          this._router.navigate(['/manufacturers']);
    }
  }

    public hideSpinner(): void {
    this.isLoading = false
  }
}
