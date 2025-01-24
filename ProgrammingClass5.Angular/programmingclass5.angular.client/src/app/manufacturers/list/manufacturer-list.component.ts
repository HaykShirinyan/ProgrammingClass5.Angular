import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Manufacturer } from "../../shared/models/Manufacturer";

@Component({
  templateUrl: './manufacturer-list.component.html'
})
export class ManufacturerListComponent implements OnInit {
  private _httpClient: HttpClient;

  public manufacturers: Manufacturer[] = [];

  constructor(http: HttpClient) {
    this._httpClient = httpClient
  }

  public ngOnInit(): void {
    this._httpClient.get<Manufacturer[]>('/api/manufacturers')
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers;
      });
  }
}
