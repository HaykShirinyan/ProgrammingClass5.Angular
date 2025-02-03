import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductType } from "../models/productType";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  [x: string]: any;
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Observable<ProductType[]> {
    return this._http.get<ProductType[]>('/api/productTypes');
  }
  public add(productType: ProductType): Observable<ProductType> {
    return this._http.post<ProductType>('/api/productTypes', productType);
  }

  public get(id: number): Observable<ProductType> {
    return this._http.get<ProductType>(`/api/productTypes/${id}`);
  }

  public update(productType: ProductType): Observable<ProductType> {
    return this._http.put<ProductType>(`/api/productTypes/${productType.id}`, productType);
  }

  public delete(id: number): Observable<ProductType> {
    return this._http.delete<ProductType>(`/api/productTypes/${id}`);
  }
}
