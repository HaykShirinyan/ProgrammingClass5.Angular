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

  public add(product: Product): Observable<Product> {
    return this._http.post<Product>('/api/products', product);
  }

  public get(id: number): Observable<Product> {
    return this._http.get<Product>(`/api/products/${id}`);
  }

  public update(product: Product): Observable<Product> {
    return this._http.put<Product>(`/api/products/${product.id}`, product);
  }

  public delete(id: number): Observable<Product> {
    return this._http.delete<Product>(`/api/products/${id}`);
  }
}
