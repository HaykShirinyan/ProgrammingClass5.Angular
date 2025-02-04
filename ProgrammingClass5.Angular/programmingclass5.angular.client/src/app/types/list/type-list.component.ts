import { Component, OnInit } from "@angular/core";
import { TypeService } from "../../shared/services/type.service";
import { Type } from "../../shared/models/type";

@Component({
  templateUrl: './type-list.component.html'
})
export class TypeListComponent implements OnInit {
  private readonly _typeService: TypeService;

  public types: Type[] = [];
  constructor(typeService: TypeService) {
    this._typeService = typeService;
  }
  public ngOnInit(): void {
    this._typeService.getAll()
      .subscribe(types => {
        this.types = types;
      })
  }
}
