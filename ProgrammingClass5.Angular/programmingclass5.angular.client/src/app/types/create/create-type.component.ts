import { Component } from "@angular/core";
import { TypeService } from "../../shared/services/type.service";
import { Router } from "@angular/router";
import { Type } from "../../shared/models/type";
import { NgForm } from "@angular/forms";



@Component({
  templateUrl: './create-type.component.html'
})

export class CreateTypeComponent {
  private readonly _typeService: TypeService;
  private readonly _router: Router;

  public type: Type = {};
  public isLoading: boolean = false;
    constructor(typeService: TypeService, router: Router) {
    this._typeService = typeService;
    this._router = router;
  }

  public async saveData(typeForm: NgForm): Promise <void> {
    if (typeForm.valid) {
      this.isLoading = true;
      await this._typeService.add(this.type)
      this.isLoading = false;
      this._router.navigate(['/types']);
    }
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }
    
}
