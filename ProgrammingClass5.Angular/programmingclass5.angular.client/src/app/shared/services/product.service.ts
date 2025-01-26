import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Observable<Product[]> {
    return this._http.get<Product[]>('/api/products');
  }
}
