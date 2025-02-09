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

  constructor(typeService: TypeService, router: Router) {
    this._typeService = typeService;
    this._router = router;
  }

  public saveData(typeForm: NgForm): void {
    if (typeForm.valid) {
      this._typeService.add(this.type)
        .subscribe(() => {
          this._router.navigate(['/types']);
        });
    }
  }


  
}
