import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
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
  public getAll(): Promise<Manufacturer[]> {
    const observable = this._http.get<Manufacturer[]>('/api/manufacturers');
    return lastValueFrom(observable);
  }

  public add(manufacturer: Manufacturer): Promise<Manufacturer> {
    const observable = this._http.post<Manufacturer>("/api/manufacturers", manufacturer);
    return lastValueFrom(observable);
  }

  public get(id: number): Promise<Manufacturer> {
    const observable = this._http.get<Manufacturer>(`/api/manufacturers/${id}`);
    return lastValueFrom(observable);
  }

  public update(manufacturer: Manufacturer): Promise<Manufacturer> {
    const observable = this._http.put<Manufacturer>(`/api/manufacturers/${manufacturer.id}`, manufacturer);
    return lastValueFrom(observable);
  }

  public delete(id: number): Promise<void> {
    const observable = this._http.delete<void>(`/api/manufacturers/${id}`);
    return lastValueFrom(observable);
  }


  public deleteAll(): Promise<void> {
    const observable = this._http.delete<void>("/api/manufacturers/delete-all");
    return lastValueFrom(observable);
  }



}
