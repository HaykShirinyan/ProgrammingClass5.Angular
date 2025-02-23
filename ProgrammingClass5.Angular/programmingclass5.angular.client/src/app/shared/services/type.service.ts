import { HttpClient } from "@angular/common/http";
import { Type } from "../models/type"; 
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TypeService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Promise <Type[]> { 
    const observable = this._http.get<Type[]>('/api/types');
    return lastValueFrom(observable);
  }

  public add(type: Type): Promise<Type> {
    const observable = this._http.post<Type>('/api/types', type);
    return lastValueFrom(observable);
  }

  public get(id: number): Promise<Type> {
    const observable = this._http.get<Type>(`/api/types/${id}`);
    return lastValueFrom(observable)
  }
  public update(type: Type): Promise<Type> {
    const observable = this._http.put<Type>(`/api/types/${type.id}`, type);
    return lastValueFrom(observable)
  }

  public delete(id: number): Promise<void> {
    const observable = this._http.delete<void>(`/api/types/${id}`);
    return lastValueFrom(observable);
    
  }

  public deleteAll(): Promise<void> {
    const observable = this._http.delete<void>('/api/types/delete-all');
    return lastValueFrom(observable)
  }
}
