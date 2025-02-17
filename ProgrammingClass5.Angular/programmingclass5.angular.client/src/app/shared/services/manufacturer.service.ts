import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";
import { Manufacturer } from "../models/manufacturer";
import { Injectable } from "@angular/core";

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

  public add(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.post<Manufacturer>('/api/manufacturers', manufacturer);
  }

  public get(id: number): Observable<Manufacturer> {
    return this._http.get<Manufacturer>(`/api/manufacturers/${id}`);
  }

  public update(manufacturer: Manufacturer): Observable<Manufacturer> {
    return this._http.put<Manufacturer>(`/api/manufacturers/${manufacturer.id}`, manufacturer);
  }

  public delete(id: number): Promise<Manufacturer> {
    const observable = this._http.delete<Manufacturer>(`/api/manufacturers/${id}`);
    return lastValueFrom(observable);
  }
}
