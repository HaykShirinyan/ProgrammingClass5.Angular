import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Manufacturer } from "../models/manufacturer";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  [x: string]: any;
  private readonly _http: HttpClient

  constructor(http: HttpClient) {
    this._http = http;
  }
  public getAll(): Observable<Manufacturer[]> {
    return this._http.get<Manufacturer[]>('/api/manufacturers');
  }

  public add(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.post<Manufacturer>('/api/manufacturers', manufacturer);
  }

  public get(id: number): Observable<Manufacturer> {
    return this._http.get<Manufacturer>(`/api/manufacturers/${id}`);
  }

  public update(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.put<Manufacturer>(`/api/manufacturers/${manufacturer.id}`, manufacturer);
  }

  public delete(id: number): Observable<Manufacturer> {
    return this._http.delete<Manufacturer>(`/api/manufacturers/${id}`);
  }

  public deleteAll(): Observable<void> {
    return this._http.delete<void>('/api/manufacturers/delete-all');
  }



}
