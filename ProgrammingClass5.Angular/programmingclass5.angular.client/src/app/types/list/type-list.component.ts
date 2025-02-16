import { Component, OnInit } from "@angular/core";
import { TypeService } from "../../shared/services/type.service";
import { Type } from "../../shared/models/type";

@Component({
  templateUrl: './type-list.component.html'
})
export class TypeListComponent implements OnInit {
  private readonly _typeService: TypeService;

  public types: Type[] = [];
  public isLoading: boolean = false;
  constructor(typeService: TypeService) {
    this._typeService = typeService;
  }
  public ngOnInit(): void {
    this.isLoading = true;
    this._typeService.getAll()
      .subscribe(types => {
        this.types = types;
        this.isLoading = false;
      });
  }

  public hideSpinner(): void {
    this.isLoading = false;
  }

  public deleteType(id?: number): void {
    if (id === undefined) {
      console.error("Type ID is undefined.");
      return;
    }

    if (confirm("Are you sure you want to delete this type?")) {
      this._typeService.delete(id).subscribe(() => {

        this.loadType();
      });
    }
  }

  private loadType(): void {
      this._typeService.getAll().subscribe((data) => {
      this.types = data;
    });
  }
  public deleteAllTypes(): void {
    this._typeService.deleteAll().subscribe(() => {
      this.types = [];
    });
  }
}
