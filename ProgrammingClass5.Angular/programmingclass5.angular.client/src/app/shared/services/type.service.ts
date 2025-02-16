import { HttpClient } from "@angular/common/http";
import { Type } from "../models/type"; 
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TypeService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Observable<Type[]> { 
    return this._http.get<Type[]>('/api/types');
  }

  public add(type: Type): Observable<Type> {
    return this._http.post<Type>('/api/types', type);
  }

  public get(id: number): Observable<Type> {
    return this._http.get<Type>(`/api/types/${id}`);
  }
  public update(type: Type): Observable<Type> {
    return this._http.put<Type>(`/api/types/${type.id}`, type);
  }

  public delete(id: number): Observable<Type> {
    return this._http.delete<Type>(`/api/types/${id}`);
  }

  public deleteAll(): Observable<void> {
    return this._http.delete<void>('/api/types/delete-all');
  }
}
