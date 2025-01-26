import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/manufacturer";

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private _http: HttpClient;

  public manufacturers: Manufacturer[] = [];

  constructor(http: HttpClient) {
    this._http = http
  }

  public ngOnInit(): void {
    this._http.get<Manufacturer[]>('/api/manufacturers')
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
      });
  }
}
