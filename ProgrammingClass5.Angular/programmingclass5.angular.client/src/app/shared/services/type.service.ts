import { HttpClient } from "@angular/common/http";
import { Type } from "../../shared/models/type"; 
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
}
