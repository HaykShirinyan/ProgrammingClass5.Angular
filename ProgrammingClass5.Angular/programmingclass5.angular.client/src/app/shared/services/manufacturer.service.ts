import { HttpClient } from "@angular/common/http";
import { Observable, lastValueFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Manufacturer } from "../models/Manufacturer";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Promise<Manufacturer[]> {
    const observable = this._http.get<Manufacturer[]>('/api/manufacturers');
    return lastValueFrom(observable);
  }

 

  public get(id: number): Observable<Manufacturer> {
    return this._http.get<Manufacturer>(`/api/manufacturers/${id}`);
  }

  public add(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.post<Manufacturer>('/api/manufacturers', manufacturer);
  }

  public update(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.put<Manufacturer>(`/api/manufacturers/${manufacturer.id}`, manufacturer);
  }

  public delete(id: number): Observable<Manufacturer> {
    return this._http.delete<Manufacturer>(`/api/manufacturers/${id}`);
  }
}
