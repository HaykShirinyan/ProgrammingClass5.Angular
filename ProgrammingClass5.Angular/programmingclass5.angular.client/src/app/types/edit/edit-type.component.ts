import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Type } from "../../shared/models/type";
import { TypeService } from "../../shared/services/type.service";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: "./edit-type.component.html"
})
export class EditTypeComponent implements OnInit {
  private readonly _typeService;
  private readonly _activatedRoute: ActivatedRoute;
  private readonly _router: Router;

  public type: Type = {};
  public isLoading: boolean = false;

  constructor(
    typeService: TypeService,
    activateRoute: ActivatedRoute,
    router: Router
  ) {
    this._typeService = typeService;
    this._activatedRoute = activateRoute;
    this._router = router;
  }
  public ngOnInit(): void {
    this.isLoading = true;
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) { 
      this._typeService.get(parseInt(id))
        .subscribe(type => {
          this.type = type;
          this.isLoading = false;
        });
    }
  }

  public saveData(typeForm: NgForm): void {
    if (typeForm.valid) {
      this.isLoading = true
      this._typeService.update(this.type)
        .subscribe(() => {
          this._router.navigate(['/types']);
          this.isLoading = false
        })
    }
  }

  public hideSpinner(): void {
    this.isLoading = false
  }
}

