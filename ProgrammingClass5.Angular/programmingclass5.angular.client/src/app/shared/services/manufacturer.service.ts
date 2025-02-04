import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Manufacturer } from "../models/manufacturer";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private readonly _http: HttpClient

  constructor(http: HttpClient) {
    this._http = http;
  }
  public getAll(): Observable<Manufacturer[]> {
    return this._http.get<Manufacturer[]>('/api/manufacturers');

  }
}
