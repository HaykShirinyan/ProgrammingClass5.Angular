import { Component, OnInit } from "@angular/core";
import { TypeService } from "../../shared/services/type.service";
import { Type } from "../../shared/models/type";
import { Router } from "@angular/router";

@Component({
  templateUrl: './type-list.component.html'
})
export class TypeListComponent implements OnInit {
  private readonly _typeService: TypeService;
  private readonly _router: Router;

  public types: Type[] = [];
  public isLoading: boolean = false;
  constructor(typeService: TypeService, router: Router) {
    this._typeService = typeService;
    this._router = router;
  }
  public async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.types = await this._typeService.getAll()
    this.isLoading = false
  }



  public hideSpinner(): void {
    this.isLoading = false;
  }

  public async deleteType(id?: number): Promise<void> {
    if (id === undefined) {
      console.error("Type ID is undefined.");
      return;
    }

    if (confirm("Are you sure you want to delete this type?")) {
      await this._typeService.delete(id)
      this.loadType(); 
    }
  }

  private async loadType(): Promise<void> {
    this.types = await this._typeService.getAll()
  }

  public async deleteAllTypes(): Promise<void> {
    await this._typeService.deleteAll();
    this.types = [];

  }
}
